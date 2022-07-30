import { DefaultUi, Player, Youtube } from '@vime/react';
import {
	CaretRight,
	FileArrowDown,
	InstagramLogo,
	Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';
import { useGetBoulderBySlugQuery } from '../graphql/generated';
import { LoadingCircle } from './LoadingCircle';

interface DescriptionProps {
	boulderSlug: string;
}
{
	/* ------------TODO------------
	- Home: opção de login/esqueci senha/cadastro
	- Home: Foto de fundo
	- Home: Validação input/usuario/senha

	- Boulders: Menu: Logado/user
	- Boulders: Menu: Links(Trad/Esportiva/Boulder/Psicobloc)
	
	- Pag Criar Climb: Validação inputs/criar mutation
	- Redireciona para o item criado

	- Perfil: pagina pra edição do perfil
	- Criar botoes como componentes!!! 
	- Componente de loading
	- Layout responsivo

	------------------------------- */
}

export function Description(props: DescriptionProps) {
	const { data } = useGetBoulderBySlugQuery({
		variables: {
			slug: props.boulderSlug,
		},
	});

	if (!data || !data.boulder) {
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
						<Youtube videoId={data.boulder.videourl} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">{data.boulder.name}</h1>
						<p className="mt-4 text-gray-200 leading-relaxed">
							{data.boulder.description}
						</p>

						<div className="flex items-center gap-4 mt-6">
							<img
								className="h-16 w-16 rounded-full border-2 border-blue-500"
								src="https://github.com/joseotaviopc.png"
								alt=""
							/>

							<div className="leading-relaxed">
								<strong className="font-semibold tracking-wide text-xl block">
									José Otavio
								</strong>
								<span className="text-gray-200 text-sm block">
									Frontend Dev
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
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
							className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
						>
							<Lightning size={24} />
							Acesse agora
						</a>
					</div>
				</div>

				<div className="gap-8 mt-20 grid grid-cols-2">
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
