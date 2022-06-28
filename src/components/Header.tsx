import { HandGrabbing } from 'phosphor-react';
import { LogoGuia } from './Logo';

export function Header() {
	return (
		<header className="w-full py-5 flex items-center gap-4 justify-center bg-gray-700 border-b border-gray-600">
			<HandGrabbing size={40} />
			<LogoGuia />
		</header>
	);
}
