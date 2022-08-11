import { HandGrabbing } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icons } from "../assets/icons";
// import { useCreateSubscriberMutation } from '../graphql/generated';

export function Subscribe() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	// const [createSubscriber, { loading, data }] = useCreateSubscriberMutation();

	async function handleSubscriber(event: FormEvent) {
		event?.preventDefault();

		// await createSubscriber({
		// 	variables: {
		// 		name,
		// 		email,
		// 	},
		// });

		navigate("/boulders");
	}

	return (
		<div className="min-h-screen flex flex-col items-center bg-subscribeImg bg-cover bg-no-repeat">
			<div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
				<div className="max-w-[640px]">
					<div className="flex gap-4">
						<HandGrabbing size={40} />
						<Icons.LogoGuia />
					</div>
					<h1 className="mt-8 text-[2.5rem] leading-tight">
						Contribua com a comunidade de{" "}
						<strong className="text-blue-500">escalada</strong>, cadastre-se
					</h1>
					<p className="mt-4 text-gray-200 leading-relaxed">
						Busque por boulder, setores, vídeos, fotos com betas variados, e
						muito mais.
					</p>
				</div>

				<div className="p-8 bg-gray-700 border border-gray-500 rounded">
					<strong className="text-xl mb-6 block tracking-wide">
						Inscreva-se
					</strong>

					<form
						onSubmit={handleSubscriber}
						className="fles flex-col gap-2 w-full"
					>
						<input
							className="bg-gray-900 rounded px-5 h-14 w-full"
							type="text"
							placeholder="Seu nome completo"
							onChange={(event) => setName(event.target.value)}
						/>
						<input
							className="bg-gray-900 rounded px-5 h-14 mt-4 w-full"
							type="email"
							placeholder="Seu email"
							onChange={(event) => setEmail(event.target.value)}
						/>

						<button
							// disabled={loading}
							className="block mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm w-full tracking-wider hover:bg-green-700 transition-colors disabled:opacity-50"
							type="submit"
						>
							Kmon pro climb
						</button>
					</form>
				</div>
			</div>

			<img className="mt-10 opacity-70" src="/assets/bg-home.jpg" alt="" />
		</div>
	);
}
