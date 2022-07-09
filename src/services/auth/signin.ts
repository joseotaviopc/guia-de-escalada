// 1-Run a query in GraphCMS to getUserByEmail.
// 2-Compare the password from sign-in form and the password stored in our database.
// 3-Assign a fresh token if the passwords match and
// 4-Store it in GraphCMS Database
// 5-Store it inside the request session
// 6-Return it back to the client

import { withIronSessionApiRoute } from 'iron-session/next';
// import { GraphQLClient, gql } from 'graphql-request';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
	useGetClimberByEmailQuery,
	useUpdateClimberMutation,
} from '../../graphql/generated';

const cookie = {
	cookieName: import.meta.env.VITE_COOKIE_NAME,
	password: import.meta.env.VITE_COOKIE_PASSWORD,
	cookieOptions: { secure: import.meta.env.VITE_NODE_ENV === 'production' },
};

//  VITE_API_URL, VITE_API_ACCESS_TOKEN,
const { VITE_JWT_SECRET } = import.meta.env;

// const client = new GraphQLClient(VITE_API_URL, {
// 	headers: {
// 		Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
// 	},
// });
// const { data } = useGetClimberByEmailQuery({
//   variables: {
//     email
//   }
// });

// gql`
// 	query getUserByEmailQuery($email: String!) {
// 		nextUser(where: { email: $email }, stage: DRAFT) {
// 			id
// 			email
// 			password
// 		}
// 	}
// `;

// const updateUserMutation = gql`
// 	mutation updateUser(
// 		$where: NextUserWhereUniqueInput!
// 		$data: NextUserUpdateInput!
// 	) {
// 		updateNextUser(data: $data, where: $where) {
// 			token
// 			email
// 		}
// 	}
// `;

export default withIronSessionApiRoute(async function signIn(
	req: any,
	res: any
) {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400).end();
		return;
	}

	// const getUserResponse = await client.request(getUserByEmailQuery, { email });
	const getUserResponse = useGetClimberByEmailQuery({
		variables: {
			email,
		},
	});

	// const { client } = getUserResponse;

	if (!getUserResponse) {
		res.status(400).end();
		return;
	}

	const hashedPassword = getUserResponse.data?.climber?.password || '';
	const isMatch = bcrypt.compare(password, hashedPassword);

	if (!isMatch) {
		res.status(400).end();
		return;
	}

	const token = jwt.sign({ email }, VITE_JWT_SECRET, { expiresIn: 36005 });
	// const updateUserResponse = await client.request(updateUserMutation, {

	const updateUserResponse = useUpdateClimberMutation({
		variables: {
			where: { email },
			data: { token },
		},
	});
	const updateClimber = updateUserResponse;

	if (!updateUserResponse) {
		res.status(500).end();
		return;
	}
	req.session.user = {
		token: updateClimber[1].data?.updateClimber?.token,
	};

	await req.session.save();
	res.status(200).json({ token: updateClimber[1].data?.updateClimber?.token });
},
cookie);
