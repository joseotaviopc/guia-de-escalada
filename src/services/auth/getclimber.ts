// 1-Extract the jwt-token sent by the client from the request header
// 2-Decode the jwt-token to get the user email & will get the user from GraphCMS.
// 3-Send appropriate response back to the client

import jwt from "jsonwebtoken";
// import { useGetClimberByEmailQuery } from '../../graphql/generated';

const { VITE_JWT_SECRETS } = import.meta.env;

export default async function GetAuthenticatedUser(req: any, res: any) {
	const defaultReturnObject = { authenticated: false, user: null };

	try {
		const token = String(req?.headers?.authorization?.replace("Bearer ", ""));
		const decoded = String(jwt.verify(token, VITE_JWT_SECRETS));

		// const getUserResponse = useGetClimberByEmailQuery({
		// 	variables: {
		// 		email: decoded,
		// 	},
		// });
		// const climber = getUserResponse.data?.climber;

		// if (!climber) {
		// 	res.status(400).json(defaultReturnObject);
		// 	return;
		// }
		// res.status(200).json({ authenticated: true, user: climber });
	} catch (err) {
		console.log("GetAuthenticatedUser, Something Went Wrong", err);
		res.status(400).json(defaultReturnObject);
	}
}
