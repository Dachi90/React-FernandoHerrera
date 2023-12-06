import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
	//Un héroe que SI existe
	test('getHeroeById debe retornar un héroe por Id', () => {
		const id = 1;
		const hero = getHeroeById(id);

		//console.log(hero);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	//Un héroe que NO existe
	test('getHeroeById debe retornar un undefined si no existe el ID', () => {
		const id = 100;
		const hero = getHeroeById(id);

		//console.log(hero);

		expect(hero).toBeFalsy();
	});

	//Tarea:
	//getHeroByOwner

	// Heéroes de DC
	test('getHeroeByOwner debe retornar los heroes de DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		console.log(heroes);

		expect(heroes.length).toEqual(3);
	});

	//Héroes de Marvel
	test('getHeroeByOwner debe retornar los heroes de Marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);
		console.log(heroes);

		expect(heroes.length).toEqual(2);
	});
});
