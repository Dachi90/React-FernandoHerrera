import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';

describe('Pruebas en el hook useFetchGifts', () => {
	test('Debe de regresar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifts('One Punch'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifts('One Punch'));
		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
		const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
