import { useGetBouldersQuery } from '../graphql/generated';
import { Boulder } from './Boulder';

export function Sidebar() {
	const { data } = useGetBouldersQuery();

	return (
		<aside className="w-80 bg-gray-700 p-6 border-l	border-gray-600">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Setores de climb
			</span>

			<div className="flex flex-col gap-8">
				{data?.boulders.map((boulder) => {
					return (
						<Boulder
							key={boulder.id}
							name={boulder.name}
							slug={boulder.slug}
							description={boulder.description}
							updatedAt={boulder.updatedAt}
						/>
					);
				})}
			</div>
		</aside>
	);
}
