// function saludar(nombre) {
// 	return `Hola, ${nombre}`;
// }

const saludar = function (nombre) {
	return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Fernando'));
console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4('Vegeta'));

const getUser = () => {
	return {
		id: 'ABC123',
		username: 'El_Papi1502',
	};
};

const user = getUser();
console.log(user);

//Tarea
// 1. Transformen a una funciñon de Flecha
// 2. Tienen que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
// 	return {
// 		uid: 'ABC567',
// 		username: nombre,
// 	};
// }

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);

const getUsuarioActivo = (nombre) => ({
	uid: 'ABC567',
	username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
