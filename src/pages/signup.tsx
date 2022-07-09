// 1-Check if the user is already signed in, if yes we redirect the user to the home page.
// 2-When a user submits the Sign up form, we call our SignUp API.
// 3-On receiving proper response we redirect the user to SignIn Page.

import React from 'react';
import { getAuthenticatedUser } from '../lib/common';
import { useState, useEffect } from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
// import Link from 'next/link';
import axios from 'axios';
import Router, { Link, useNavigate } from 'react-router-dom';
export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const redirectIfAuthenticated = async () => {
		const isUserAuthenticated = await getAuthenticatedUser();
		if (isUserAuthenticated?.authenticated) {
			navigate('/');
		}
	};

	useEffect(() => {
		redirectIfAuthenticated();
	}, []);

	const signUp = async () => {
		try {
			setIsLoading(true);
			const response = await axios({
				method: 'post',
				url: API_ROUTES.SIGN_UP,
				data: {
					email,
					password,
					firstname,
					lastname,
				},
			});
			if (!response?.data?.token) {
				console.log('Something went wrong during signing up: ', response);
				return;
			}
			navigate(APP_ROUTES.SIGN_IN);
		} catch (err) {
			console.log('Some error occured during signing up: ', err);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="w-full h-screen flex justify-center items-center ">
			<div className="w-1/2 h-auto flex flex-col p-8 bg-gray-700 border border-gray-500 rounded">
				<h2 className="text-center font-medium text-2xl mb-4">Sign Up</h2>
				<div className="flex flex-1 flex-col justify-evenly gap-2">
					<input
						className="bg-gray-900 rounded px-5 h-14 w-full"
						type="email"
						placeholder="First Name"
						value={firstname}
						onChange={(e) => {
							setFirstname(e.target.value);
						}}
					/>
					<input
						className="bg-gray-900 rounded px-5 h-14 w-full"
						type="email"
						placeholder="Last Name"
						value={lastname}
						onChange={(e) => {
							setLastname(e.target.value);
						}}
					/>
					<input
						className="bg-gray-900 rounded px-5 h-14 w-full"
						type="email"
						placeholder="Enter Your Email"
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
             block mt-4 bg-green-500 uppercase py-4 rounded font-medium text-sm w-full tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
						onClick={signUp}
					>
						{isLoading ? (
							<div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" />
						) : null}
						<span>SIGN UP</span>
					</button>
				</div>
				<div className="text-center text-sm">
					Already a User?
					<Link to="/signin">
						<a className="font-medium text-blue-900 ml-1">Sign In</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
