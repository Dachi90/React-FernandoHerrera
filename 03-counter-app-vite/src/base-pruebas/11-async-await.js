export const getImagen = async () => {
	try {
		const apiKey = 'TMaqHZxCuhqvhF0Pdp3vTAWx9mWN28Y1';
		const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await resp.json();

		const { url } = data.images.original;
		return url;
	} catch (error) {
		// manejo del error
		console.error(error);
		console.log('No se encontró la imagen');
	}
};

getImagen();
