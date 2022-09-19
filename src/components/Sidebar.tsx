import { useGetClimbSpotsQuery } from "../graphql/generated";
import { SidebarProps } from "../types/components";
import { Boulder } from "./Boulder";
import classNames from "classnames";

export function Sidebar({ themeDark, setThemeDark }: SidebarProps) {
	const { loading, error, data } = useGetClimbSpotsQuery();

	if (loading) return <h2>Carregando...</h2>;
	if (error)
		return (
			<>
				<h2>Erros nos dados. :( </h2>
				{console.log(JSON.stringify(error, null, 2))}
			</>
		);
	return (
		<aside className="w-80 bg-gray-50 dark:bg-gray-700 p-6 border-r border-gray-100	dark:border-gray-600 hidden lg:block">
			<span
				className={classNames(
					"font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block",
					{
						"text-gray-500": !themeDark,
					}
				)}
			>
				Setores de climb
			</span>

			<div className="flex flex-col gap-8">
				{data?.climbSpots.map((boulder) => {
					return (
						<Boulder
							key={boulder.id}
							name={boulder.name}
							slug={boulder.slug}
							description={boulder.description}
							updatedAt={boulder.updatedAt}
							themeDark={themeDark}
						/>
					);
				})}
			</div>
		</aside>
	);
}
