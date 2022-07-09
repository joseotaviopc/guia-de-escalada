// 1-It will have a Navigation Bar with a LogOut button.
// 2-When a user hits Logout it will remove the token from the browser’s local storage and call the SignOut API.

import React from 'react';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
// import Link from 'next/link';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

type Children = {
	children: React.ReactNode;
};

export default function Layout({ children }: Children) {
	const navigate = useNavigate();
	const logOut = async () => {
		localStorage.clear();
		await axios({
			method: 'POST',
			url: API_ROUTES.SIGN_OUT,
		});
		navigate(APP_ROUTES.SIGN_IN);
	};
	return (
		<>
			<div className="h-screen">
				<header className="flex shadow-lg p-4 bg-blue-900 text-white">
					<Link to={APP_ROUTES.HOME}>
						<a className="mr-5"> Home </a>
					</Link>
					<Link to={APP_ROUTES.PROFILE}>
						<a className="mr-5"> Profile </a>
					</Link>
					<button className="ml-auto" onClick={logOut}>
						{' '}
						Logout{' '}
					</button>
				</header>
				<main className="h-full">{children}</main>
			</div>
		</>
	);
}
