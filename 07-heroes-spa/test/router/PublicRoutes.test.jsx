import { render, screen } from '@testing-library/react';
import { PublicRoutes } from '../../src/router/PublicRoutes';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoutes />', () => {
	test('Debe de mostrar el children si no está autenticado', () => {
		const contextValue = {
			logged: false,
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoutes>
					<h1>Ruta pública</h1>
				</PublicRoutes>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Ruta pública')).toBeTruthy();
	});

	test('Debe de navegar si está autenticado', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'Strider',
				id: 'ABC123',
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path='/login'
							element={
								<PublicRoutes>
									<h1>Ruta pública</h1>
								</PublicRoutes>
							}
						/>
						<Route path='/marvel' element={<h1>Página de Marvel</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Página de Marvel')).toBeTruthy();
	});
});
