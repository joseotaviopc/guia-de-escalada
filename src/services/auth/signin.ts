import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
const provider = new GoogleAuthProvider();

// const auth = getAuth();

// Login Social Google
export async function signInWithGoogle() {
	try {
		const result = await signInWithPopup(auth, provider);
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential?.accessToken;
		// The signed-in user info.
		const user = result.user;
		// ...
		console.log(user);
		return user;
	} catch (error: any) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.customData.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
		// ...
		return null;
	}
}

// Login com email e senha
export async function signInWithEmail({ email, password }: any) {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		// Signed in
		const user = userCredential.user;
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
	}
}
