import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth/context/AuthContext';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar/>', () => {
	beforeEach(() => jest.clearAllMocks());
	const contextValue = {
		logged: true,
		user: {
			id: 'ABC',
			name: 'Juan Carlos',
		},
		logout: jest.fn(),
	};

	test('Debe de mostrar el nombre del usuario', () => {
		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText(contextValue.user.name)).toBeTruthy();
	});

	test('Debe de llamar al logout y navigate cuando se hace click en el botón', () => {
		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
