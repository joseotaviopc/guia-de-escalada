import classNames from "classnames";
import { useState } from "react";
import { useParams } from "react-router-dom";
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

	return (
		<div className="flex flex-col min-h-screen">
			<Header themeDark={themeDark} setThemeDark={setThemeDark} />
			<main className="flex flex-1">
				<Sidebar themeDark={themeDark} setThemeDark={setThemeDark} />
				{slug ? (
					<Description
						boulderSlug={slug}
						themeDark={themeDark}
						setThemeDark={setThemeDark}
					/>
				) : (
					<div
						className={classNames("flex-1", {
							"bg-slate-50 text-gray-600": !themeDark,
						})}
					>
						<h1>TODO: Placeholder</h1>
					</div>
				)}
			</main>
		</div>
	);
}
