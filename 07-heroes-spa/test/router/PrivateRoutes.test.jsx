import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoutes } from '../../src/router/PrivateRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoutes/>', () => {
	test('Debe de mostrar el children si está autenticado', () => {
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			logged: true,
			user: {
				id: 'ABC',
				name: 'Juan Carlos',
			},
		};
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/search?q=batman']}>
					<PrivateRoutes>
						<h1>Ruta privada</h1>
					</PrivateRoutes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Ruta privada')).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
	});
});
