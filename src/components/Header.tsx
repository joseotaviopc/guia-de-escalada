import { HandGrabbing } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../assets/icons";
import { colors } from "../styles/colors";
import { HeaderProps } from "../types/components";
import { useUser } from "../context/user-context";

export function Header({ themeDark, setThemeDark }: HeaderProps) {
	const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
	const themeToggleLightIcon = document.getElementById(
		"theme-toggle-light-icon"
	);
	// const themeToggleBtn = document.getElementById("theme-toggle");
	const handleToggle = () => {
		themeDark
			? themeToggleLightIcon?.classList.remove("hidden")
			: themeToggleDarkIcon?.classList.remove("hidden");

		themeToggleDarkIcon?.classList.toggle("hidden");
		themeToggleLightIcon?.classList.toggle("hidden");

		themeDark
			? document.documentElement.classList.remove("dark")
			: document.documentElement.classList.add("dark");
		setThemeDark(!themeDark);
	};

	// const [themeDark, setThemeDark] = useState(() => {
	// 	if (localStorage.getItem("theme") === "light") {
	// 		return false;
	// 	}
	// 	return true;
	// });
	const navigate = useNavigate();
	const { user } = useUser();
	console.log(user.photoURL);
	return (
		<header className="w-full py-5 flex items-center gap-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-600 px-4">
			<HandGrabbing
				size={40}
				alt="Guia de Escalada"
				onClick={() => navigate("/boulders")}
				className="cursor-pointer dark:fill-purple-300 justify-self-start"
				color={themeDark ? undefined : colors.green[500]}
			/>
			<Icons.LogoGuia color={themeDark ? "#E1E1E6" : colors.gray[900]} />
			{user && (
				<div className="flex gap-2 ml-auto mr-4">
					<span>{user.displayName.split(" ")[0]}</span>
					<img
						src={user.photoURL ? user.photoURL : ""}
						// alt={user.displayName}
						className="w-8 h-8 border-solid rounded-full"
					/>
				</div>
			)}
			<button
				onClick={() => handleToggle()}
				id="theme-toggle"
				data-tooltip-target="tooltip-toggle"
				type="button"
				className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 justify-self-end"
			>
				{/* focus:ring-4 */}
				<svg
					aria-hidden="true"
					id="theme-toggle-dark-icon"
					className="hidden w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
				</svg>
				<svg
					aria-hidden="true"
					id="theme-toggle-light-icon"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
						fillRule="evenodd"
						clipRule="evenodd"
					></path>
				</svg>
				<span className="sr-only">Toggle dark mode</span>
			</button>
		</header>
	);
}
