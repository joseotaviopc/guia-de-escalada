import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface BoulderProps {
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
}

export function Boulder(props: BoulderProps) {
	const isBouldersUpdated = isPast(parseISO(props.updatedAt));
	console.log(props);
	const updatedBoulderFormated = format(
		parseISO(props.updatedAt),
		"EEEE' • 'd' de 'MMMM' • 'K'h'mm",
		{
			locale: ptBR,
		}
	);

	return (
		<Link to={`/boulders/boulder/${props.slug}`} className="group">
			<span className="text-gray-300">{updatedBoulderFormated}</span>

			<div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
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
		</Link>
	);
}
