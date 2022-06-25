import { BouldersList } from './BouldersList';

export function Sidebar() {
	return (
		<aside className="w-80 bg-gray-700 p-6 border-l	border-gray-600">
			<span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
				Setores de climb
			</span>

			<div>
				<BouldersList
					title="Pracinha"
					slug="pracinha"
					updatedAt={new Date()}
					type="photo"
				/>
				<BouldersList
					title="Oriente"
					slug="oriente"
					updatedAt={new Date()}
					type="video"
				/>
			</div>
		</aside>
	);
}
