import { Route, Routes, Navigate } from 'react-router-dom';
import { Boulders } from './pages/Boulders';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { Subscribe } from './pages/Subscribe';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/subscribe" element={<Subscribe />} />
			<Route path="/boulders" element={<Boulders />} />
			<Route path="/boulders/boulder/:slug" element={<Boulders />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}
