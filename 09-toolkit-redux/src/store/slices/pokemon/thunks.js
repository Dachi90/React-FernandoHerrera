import { setPokemons, startLoadingPokemons } from './pokmonSlice';

export const getPkemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		//TODO realizar petición http

		//dispatch(setPokemons())
	};
};
