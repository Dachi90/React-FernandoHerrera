import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckinhAuth } from '../ui/';
import { UseCheckAuth } from '../hooks';

export const AppRouter = () => {
	const { status } = UseCheckAuth();

	if (status === 'checking') {
		return <CheckinhAuth />;
	}
	return (
		<Routes>
			{status === 'authenticated' ? (
				<Route
					path='/*'
					element={<JournalRoutes />}
				/>
			) : (
				<Route
					path='/auth/*'
					element={<AuthRoutes />}
				/>
			)}

			<Route
				path='/*'
				element={<Navigate to='/auth/login' />}
			/>
			{/* Login y regsitro */}
			{/* <Route
				path='/auth/*'
				element={<AuthRoutes />}
			/> */}

			{/* JournalApp */}
			{/* <Route
				path='/*'
				element={<JournalRoutes />}
			/> */}
		</Routes>
	);
};
