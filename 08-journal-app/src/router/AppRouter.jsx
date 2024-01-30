import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useSelector } from 'react-redux';
import { CheckinhAuth } from '../ui/';

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);

	if (status === 'checking') {
		return <CheckinhAuth />;
	}
	return (
		<Routes>
			{/* Login y regsitro */}
			<Route
				path='/auth/*'
				element={<AuthRoutes />}
			/>

			{/* JournalApp */}
			<Route
				path='/*'
				element={<JournalRoutes />}
			/>
		</Routes>
	);
};
