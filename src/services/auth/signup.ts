// 1-Sign a jwt-token using the user’s email.
// 2-Hash the user password.
// 3-Execute a useCreateClimberMutation to store the new user in our GraphCMS Database.
// 4-Send the token back to the client.

// import { GraphQLClient } from 'graphql-request';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { useCreateClimberMutation } from '../../graphql/generated';

const {
	// VITE_API_URL,
	// VITE_API_ACCESS_TOKEN,
	VITE_JWT_SECRET,
	VITE_JWT_EXPIRES_IN,
} = import.meta.env;

// const client = new GraphQLClient(VITE_API_URL, {
// 	headers: {
// 		Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
// 	},
// });

const [createClimber, { loading, data }] = useCreateClimberMutation();

export default async function handleCreateClimber(req: any, res: any) {
	const { email, password, firstname, lastname } = req.body;
	if (!email || !password || !firstname || !lastname) {
		res.status(400).end();
	}
	const token = jwt.sign({ email }, VITE_JWT_SECRET, {
		expiresIn: VITE_JWT_EXPIRES_IN,
	});
	const hashedPassword = await bcrypt.hash(password, 8);
	const climberData = {
		email,
		password: hashedPassword,
		firstname,
		lastname,
		token,
	};
	// const response = await client.request(CreateClimber, { userData });

	const response = await createClimber({
		variables: climberData,
	});
	// if (!response?.CreateClimber?.id) {
	if (!response) {
		res.status(500);
	}
	res.status(200).json({ token });
}
