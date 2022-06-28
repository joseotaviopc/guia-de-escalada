import { useParams } from 'react-router-dom';
import { Description } from '../components/Description';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export function Boulders() {
	const { slug } = useParams<{ slug: string }>();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				{slug ? (
					<Description boulderSlug={slug} />
				) : (
					<div className="flex-1">
						<h1>TODO: Placeholder</h1>
					</div>
				)}

				<Sidebar />
			</main>
		</div>
	);
}
