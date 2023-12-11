import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Probando el componente GifItem', () => {
	const title = 'títuloo';
	const url = 'url';
	test('Debe ahcer match con el snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});
});
