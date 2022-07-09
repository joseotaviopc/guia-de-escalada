import { Route, Routes, Navigate } from 'react-router-dom';
import { Boulders } from './pages/Boulders';
import { Subscribe } from './pages/Subscribe';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Subscribe />} />
			<Route path="/boulders" element={<Boulders />} />
			<Route path="/boulders/boulder/:slug" element={<Boulders />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}
