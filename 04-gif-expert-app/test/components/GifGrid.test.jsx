import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';

jest.mock('../../src/hooks/useFetchGifts');

describe('Pruebas en el archivo <GifGrid/>', () => {
	const category = 'One Punch';
	test('Debe de mostrar el loading inicialmente', () => {
		useFetchGifts.mockReturnValue({
			images: [],
			isLoading: true,
		});
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	});

	test('Debe mostrar items cuandos se cargan imagenes desde el useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: '123',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
		];

		useFetchGifts.mockReturnValue({
			images: gifs,
			isLoading: false,
		});
		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
