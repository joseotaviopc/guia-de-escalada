// 1-Check if the user is already signed in, if yes we redirect the user to the home page.
// 2-When a user submits the Sign in form, we call our SignIn API.
// 3-On receiving a token from our SignIn API
// 4-We store the token in local storage
// 5-Redirect the user to Home page

// import React from 'react';
import { getAuthenticatedUser, storeTokenInLocalStorage } from "../lib/common";
import { useState, useEffect } from "react";
import { API_ROUTES, APP_ROUTES } from "../utils/constants";
import axios from "axios";
// import Link from 'next/link';
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const redirectIfAuthenticated = async () => {
		const isUserAuthenticated = await getAuthenticatedUser();
		if (isUserAuthenticated?.authenticated) {
			navigate("/");
		}
	};

	useEffect(() => {
		redirectIfAuthenticated();
	}, []);

	const signIn = async () => {
		try {
			setIsLoading(true);
			const response = await axios({
				method: "post",
				url: API_ROUTES.SIGN_IN,
				data: {
					email,
					password,
				},
			});
			if (!response?.data?.token) {
				console.log("Something went wrong during signing in: ", response);
				return;
			}
			storeTokenInLocalStorage(response.data.token);
			navigate(APP_ROUTES.HOME);
		} catch (err) {
			console.log("Some error occured during signing in: ", err);
			navigate("/subscribe");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-1/2 h-auto flex flex-col p-8 bg-gray-700 border border-gray-500 rounded">
				<h2 className="text-center font-medium text-2xl mb-4">Bem vindo</h2>
				<div className="flex flex-1 flex-col justify-evenly gap-2">
					<input
						className="bg-gray-900 rounded px-5 h-14 w-full"
						type="email"
						placeholder="Digite seu Email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						className="bg-gray-900 rounded px-5 h-14 w-full"
						type="password"
						placeholder="*******"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<button
						className="
            block my-4 bg-green-500 uppercase py-4 rounded font-medium text-sm w-full tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
						onClick={signIn}
					>
						{isLoading ? (
							<div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" />
						) : null}
						<span className="uppercase">Entrar</span>
					</button>
				</div>
				<div className="text-center text-sm">
					Não tem conta?
					<Link to="/signup">
						<a className="font-medium text-blue-900 ml-2">Criar conta</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
