import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
	test('debe de subir el archivo correctamente a cloudinary', async () => {
		const imageUrl = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png';
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);
		expect(typeof url).toBe('string');
	});
});
