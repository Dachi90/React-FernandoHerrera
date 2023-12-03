// import, export y funciones comunes de arreglos
import heroes, { owners } from '../data/heroes';

console.log(owners);

// .find() devuelve el PRIMER elemento que cumple la condición
const getHeroeById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};
console.log(getHeroeById(2));

// .filter() devuelve TODOS los elementos que cumplen la condición
const getHeroesByOwner = (owner) => {
	return heroes.filter((heroe) => heroe.owner === owner);
};
console.log(getHeroesByOwner('Marvel'));
