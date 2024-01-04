import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
	test('Debe de retornar el estado por defecto', () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
	});

	test('Debe de (login) llamar el login y autenticar y establecer el user', () => {
		const user = {
			id: 'ABC',
			name: 'Martin',
		};

		const action = {
			type: types.login,
			payload: user.name,
		};
		const state = authReducer({ logged: false }, action);

		expect(state).toEqual({
			...state,
			logged: true,
			user: action.payload,
		});
	});

	test('Debe de (logout) borrar el name del usuario y logged a false', () => {
		const state = {
			logged: true,
			user: { id: '123', name: 'Juan' },
		};

		const action = {
			type: types.logout,
		};
		const newState = authReducer(state, action);

		expect(newState).toEqual({ logged: false });
	});
});
