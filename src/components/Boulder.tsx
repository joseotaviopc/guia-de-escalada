import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

type boulder = {
	themeDark: boolean;
	name: string;
	slug: string;
	description: string;
	conditions?: string;
	videourl?: string;
	updatedAt: string;
	photos?: {
		fileName: string;
	};
	location?: {
		latitude: string;
		longitude: string;
	};
};

export function Boulder(props: boulder) {
	const { slug } = useParams<{ slug: string }>();

	const isBouldersUpdated = isPast(parseISO(props.updatedAt));
	console.log(props);
	const updatedBoulderFormated = props.updatedAt
		? format(parseISO(props.updatedAt), "EEEE' • 'd' de 'MMMM' • 'K'h'mm", {
				locale: ptBR,
		  })
		: "-";

	const isActiveBoulder = slug === props.slug;

	return (
		<Link to={`/boulders/boulder/${props.slug}`} className="group">
			<span
				className={classNames("text-gray-300", {
					"text-gray-500": !props.themeDark,
				})}
			>
				{updatedBoulderFormated}
			</span>

			<div
				className={classNames(
					"rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
					{
						"bg-green-500": isActiveBoulder,
					}
				)}
			>
				<header className="flex items-center justify-between">
					{isBouldersUpdated ? (
						<span
							className={classNames(
								"text-sm font-medium flex items-center gap-2",
								{
									"text-white": isActiveBoulder,
									"text-blue-800": !isActiveBoulder,
								}
							)}
						>
							<CheckCircle size={20} />
							Croqui atualizado
						</span>
					) : (
						<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
							<Lock size={20} />
							Croqui
						</span>
					)}

					<span
						className={classNames(
							"text-xs rounded py-[2px] px-2 text-white border font-medium",
							{
								"text-gray-500": !props.themeDark,
								"border-white": isActiveBoulder,
								"border-green-300": !isActiveBoulder,
							}
						)}
					>
						Fotos
					</span>
				</header>

				<span
					className={classNames("mt-5 block", {
						"text-gray-500": !props.themeDark,
						"text-white": isActiveBoulder,
						"text-gray-200": !isActiveBoulder,
					})}
				>
					{props.name}
				</span>
			</div>
		</Link>
	);
}
