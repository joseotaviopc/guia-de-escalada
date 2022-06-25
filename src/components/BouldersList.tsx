import { CheckCircle, Lock } from 'phosphor-react';

interface BouldersListProps {
	title: string;
	slug: string;
	updatedAt: Date;
	type: 'photo' | 'video';
}

export function BouldersList(props: BouldersListProps) {
	const isBouldersUpdated = true;

	return (
		<a href="#">
			<span className="text-gray-300">
				{props.updatedAt.toLocaleDateString('pt-br')}
			</span>

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
						{props.type === 'video' ? 'Vídeos' : 'Fotos'}
					</span>
				</header>

				<span className="text-gray-200 mt-5 block">{props.title}</span>
			</div>
		</a>
	);
}
