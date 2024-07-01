import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
	cloud_name: 'dulumtlsf',
	api_key: '566983683437449',
	api_secret: 'pauOX20ENmAn9gT4Z_JK9iEGxFk',
	secure: true,
});

describe('Pruebas en fileUpload', () => {
	test('debe de subir el archivo correctamente a cloudinary', async () => {
		const imageUrl = 'https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png';
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);
		expect(typeof url).toBe('string');

		const segments = url.split('/');
		const imageId = segments[segments.length - 1].replace('.png', '');
		console.log(imageId);
		await cloudinary.api.delete_resources([imageId]);
	});

	test('debe de retornar un null', async () => {
		const file = new File([], 'foto.jpg');

		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
