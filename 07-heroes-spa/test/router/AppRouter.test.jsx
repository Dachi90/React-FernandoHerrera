import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <AppRouter />', () => {
	test('Debe de mostrar el login si no está autenticado', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getAllByAltText('Login').length).toBeTruthy();
	});

	test('Debe de mostrar el componente de Marvel si está autenticado', () => {
		const contextValue = {
			logged: true,
			user: {
				id: 'abc',
				name: 'Juan',
			},
		};

		render(
			<MemoryRouter initialEntries={['/login']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getAllByAltText('Marvel').length).toBeGreaterThanOrEqual(1);
	});
});
