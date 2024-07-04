import { startNewNote } from '../../../src/store/journal';

describe('Pruebas en Journal thunks', () => {
	const dispatch = jest.fn();
	const getState = jest.fn();
	beforeEach(() => jest.clearAllMocks());

	test('startNewNote debe de crear una nueva nota e blanco', async () => {
		const uid = 'TEST.UID';
		getState.mockReturnValue({ auth: { uid } });
		await startNewNote()(dispatch, getState);
	});
});
