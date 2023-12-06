import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas de 06-desesc-obj', () => {
	test('usContext debería retornar un objeto', () => {
		const person = {
			clave: 'calve',
			edad: 22,
			rango: 'capitan',
			nombre: 'nombre',
		};

		const context = usContext(person);

		expect(context).toEqual({
			nombreClave: person.clave,
			anios: person.edad,
			latlng: {
				lat: 14.1232,
				lng: -12.3232,
			},
		});
	});
});
