import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en el <LoginPage/>', () => {
	test('Debe de mostrarel componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);
		const preTag = screen.getByLabelText('pre');
		expect(preTag.innerHTML).toBe('null');
	});

	test('Debe de llamar al setser cuando se hace click en el botón', () => {
		const setUserMock = jest.fn();
		const user = { id: 123, name: 'Juan', email: 'juan@google.com' };
		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(setUserMock).toHaveBeenCalledWith(user);
	});
});
