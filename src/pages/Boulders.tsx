import classNames from "classnames";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Description } from "../components/Description";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Boulders() {
	const { slug } = useParams<{ slug: string }>();
	const [themeDark, setThemeDark] = useState(() => {
		if (localStorage.getItem("theme") === "light") {
			return false;
		}
		return true;
	});
	const navigate = useNavigate();
	function handleNewBoulder(event: FormEvent) {
		event?.preventDefault();
		navigate("/newboulder");
	}

	return (
		<div className="flex flex-col min-h-screen">
			<Header themeDark={themeDark} setThemeDark={setThemeDark} />
			<main className="flex flex-1 items-center">
				<Sidebar themeDark={themeDark} setThemeDark={setThemeDark} />
				{slug ? (
					<Description
						boulderSlug={slug}
						themeDark={themeDark}
						setThemeDark={setThemeDark}
					/>
				) : (
					<div
						className={classNames("flex flex-col flex-1 items-center", {
							"bg-slate-50 text-gray-600": !themeDark,
						})}
					>
						<h1>Novo Boulder</h1>
						<button
							className="
            block my-4 bg-green-500 uppercase py-4 px-8 rounded font-medium text-sm w-auto tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
							onClick={() => navigate("/newboulder")}
						>
							{/* {isLoading ? (
								<div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" />
							) : null} */}
							<span className="uppercase">Novo Boulder</span>
						</button>
					</div>
				)}
			</main>
		</div>
	);
}
