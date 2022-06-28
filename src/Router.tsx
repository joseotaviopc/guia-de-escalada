import { Route, Routes } from 'react-router-dom';
import { Boulders } from './pages/Boulders';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/boulders" element={<Boulders />} />
			<Route path="/boulders/boulder/:slug" element={<Boulders />} />
		</Routes>
	);
}
