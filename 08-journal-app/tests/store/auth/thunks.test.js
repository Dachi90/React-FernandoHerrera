import { checkingCredentials } from '../../../src/store/auth/authSlice';
import { chekingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en authThunks', () => {
	const dispatch = jest.fn();
	beforeEach(() => jest.clearAllMocks());
	test('debe de invocar el checkingCredentials', async () => {
		await chekingAuthentication()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
	});
});
