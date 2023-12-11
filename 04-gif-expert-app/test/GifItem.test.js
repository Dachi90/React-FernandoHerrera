import { render } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';

describe('Probando el componente GifItem', () => {
	test('Debe ahcer match con el snapshot', () => {
		const title = 'título';
		const url = 'url';
		const container = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});
});
