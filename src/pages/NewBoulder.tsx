import classNames from "classnames";
import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function NewBoulder() {
	const [data, setData] = useState({
		name: "",
		slug: "",
		description: "",
		conditions: "",
		graduation: "",
		category: "",
		videourl: "",
		latitude: 0,
		longitude: 0,
	});

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
				<section className="flex flex-col w-full md:w-3/4 h-auto mx-auto p-4 md:p-8 bg-gray-700 border border-gray-500 rounded">
					<h2 className="text-center font-medium text-2xl my-4">
						Preencha os dados do boulder
					</h2>
					<div className="flex flex-1 flex-col gap-4">
						{/* $slug: String! 
						$description: String! 
						$conditions: String
						$graduation: Graduation! 
						$category: Category! 
						$videourl: String!
						$latitude: Float! 
						$longitude: Float! */}
						<input
							className="bg-gray-900 text-gray-200 rounded px-5 h-14 w-full md:w-3/4 mx-auto"
							type="text"
							placeholder="Digite o nome"
							value={data.name}
							onChange={(e) => {
								setData({
									...data,
									name: e.target.value,
								});
							}}
						/>
						<input
							className="bg-gray-900 text-gray-200 rounded px-5 h-14 w-full md:w-3/4 mx-auto"
							type="text"
							placeholder="Slug"
							value={data.slug}
							onChange={(e) => {
								setData({
									...data,
									slug: e.target.value,
								});
							}}
						/>
						<input
							className="bg-gray-900 text-gray-200 rounded px-5 h-14 w-full md:w-3/4 mx-auto"
							type="text"
							placeholder="Categoria"
							value={data.category}
							onChange={(e) => {
								setData({
									...data,
									category: e.target.value,
								});
							}}
						/>
						<input
							className="bg-gray-900 text-gray-200 rounded px-5 h-14 w-full md:w-3/4 mx-auto"
							type="text"
							placeholder="Graduação"
							value={data.graduation}
							onChange={(e) => {
								setData({
									...data,
									graduation: e.target.value,
								});
							}}
						/>
						<textarea
							className="bg-gray-900 text-gray-200 rounded p-5 h-24 w-full md:w-3/4 mx-auto"
							placeholder="Descrição"
							value={data.description}
							onChange={(e) => {
								setData({
									...data,
									description: e.target.value,
								});
							}}
						/>
						<textarea
							className="bg-gray-900 text-gray-200 rounded p-5 h-24 w-full md:w-3/4 mx-auto"
							placeholder="Condição"
							value={data.conditions}
							onChange={(e) => {
								setData({
									...data,
									conditions: e.target.value,
								});
							}}
						/>
						<button
							className="
            block my-4 mx-auto bg-green-500 uppercase py-4 rounded font-medium text-sm w-full md:w-3/4 tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
						>
							<span className="uppercase">Criar</span>
						</button>
					</div>
				</section>
			</main>
		</div>
	);
}
