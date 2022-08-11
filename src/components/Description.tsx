import { DefaultUi, Player, Youtube } from "@vime/react";
import {
	CaretRight,
	FileArrowDown,
	InstagramLogo,
	Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetClimbSpotsBySlugQuery } from "../graphql/generated";
import { LoadingCircle } from "./LoadingCircle";
import { DescriptionProps } from "../types/components";
import classNames from "classnames";

{
}

export function Description({
	boulderSlug,
	themeDark,
	setThemeDark,
}: DescriptionProps) {
	const { data } = useGetClimbSpotsBySlugQuery({
		variables: {
			slug: boulderSlug,
		},
	});

	if (!data || !data.climbSpot) {
		return (
			<div className="flex-1 p-4">
				<LoadingCircle />
			</div>
		);
	}

	return (
		<div className="flex-1 bg-gray-50 dark:bg-gray-700">
			<div className=" flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
					<Player>
						<Youtube videoId={data.climbSpot.videourl} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16 flex-col sm:flex-row  ">
					<div className="flex-1">
						<h1
							className={classNames("text-2xl font-bold", {
								"text-gray-500": !themeDark,
							})}
						>
							{data.climbSpot.name}
						</h1>
						<p
							className={classNames("mt-4 text-gray-200 leading-relaxed", {
								"text-gray-500": !themeDark,
							})}
						>
							{data.climbSpot.description}
						</p>

						<div className="flex items-center gap-4 mt-6">
							<img
								className={classNames(
									"h-16 w-16 rounded-full border-2 border-blue-500",
									{ "border-blue-800": !themeDark }
								)}
								src="https://github.com/joseotaviopc.png"
								alt=""
							/>

							<div className="leading-relaxed">
								<strong
									className={classNames(
										"font-semibold tracking-wide text-xl block",
										{
											"text-gray-500": !themeDark,
										}
									)}
								>
									José Otavio
								</strong>
								<span
									className={classNames("text-gray-200 text-sm block", {
										"text-gray-500": !themeDark,
									})}
								>
									Frontend Dev
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-row justify-between gap-4 w-full sm:flex-col sm:w-auto sm:items-center">
						<a
							href="#"
							className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
						>
							<InstagramLogo size={24} />
							Instagram
						</a>

						{/* ----------------------------
						 Criar botoes como componentes!!! 
						 ------------------------------- */}

						<a
							href="#"
							className={classNames(
								"p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors",
								{
									"border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-gray-200":
										!themeDark,
								}
							)}
						>
							<Lightning size={24} />
							Acesse agora
						</a>
					</div>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
					<a
						href="#"
						className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
					>
						<div className="bg-green-700 h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>

						<div className="py-6 leading-relaxed">
							<strong className="text-xl tracking-wide">Veja mais</strong>
							<p className="text-sm text-gray-200 mt-2">
								Fotos, descriçoes, betas, melhores condições e muito mais
							</p>
						</div>

						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>

					<a
						href="#"
						className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
					>
						<div className="bg-green-700 h-full p-6 flex items-center">
							<FileArrowDown size={40} />
						</div>

						<div className="py-6 leading-relaxed">
							<strong className="text-xl tracking-wide">
								Veja sua evolução
							</strong>
							<p className="text-sm text-gray-200 mt-2">
								Registre sua escalada e vá medindo seu progresso
							</p>
						</div>

						<div className="h-full p-6 flex items-center">
							<CaretRight size={24} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
