// Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Si definimos dentro de un bloque su scope solo será dentro de ese bloque.
if (true) {
	const nombre = 'Peter';
	let valorDado = 6;
	console.log(nombre, valorDado);
}

console.log(valorDado);
