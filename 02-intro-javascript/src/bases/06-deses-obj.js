// Desestructuración de objetos (Asignación desectructurante)

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
	console.log(nombre, edad, clave, rango);

	return {
		nombreClave: clave,
		años: edad,
		ltdlng: {
			lat: 14.1232,
			lng: -12.3232,
		},
	};
};

const avenger = useContext(persona);
console.log(avenger);

const {
	nombreClave,
	años,
	ltdlng: { lat, lng },
} = avenger;
console.log(nombreClave, años);
console.log(lat, lng);
