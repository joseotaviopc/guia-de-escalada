import { CheckCircle, Lock } from 'phosphor-react';

interface BouldersListProps {
	name: string;
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
}

export function BouldersList(props: BouldersListProps) {
	const isBouldersUpdated = true;

	return (
		<a href="#">
			<span className="text-gray-300">{props.updatedAt}</span>

			<div className="rounded border border-gray-500 p-4 mt-2">
				<header className="flex items-center justify-between">
					{isBouldersUpdated ? (
						<span className="text-sm text-blue-500 font-medium flex items-center gap-2 ">
							<CheckCircle size={20} />
							Croqui atualizado
						</span>
					) : (
						<span className="text-sm text-orange-500 font-medium flex items-center gap-2 ">
							<Lock size={20} />
							Croqui
						</span>
					)}

					<span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
						Fotos
					</span>
				</header>

				<span className="text-gray-200 mt-5 block">{props.name}</span>
			</div>
		</a>
	);
}
