import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Probando el componente GifItem', () => {
	const title = 'títuloo';
	const url = 'https://probando.com/';

	test('Debe ahcer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GifItem title={title} url={url} />);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Debe de mostrar el título en el componente', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
