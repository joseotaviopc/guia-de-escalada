import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export async function signUp({ email, password }: any) {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		// Signed in
		const user = userCredential.user;
		// ...
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	}
}
