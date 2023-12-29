import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';

describe('Purbeas en <MultipleCustomHooks />>', () => {
	test('Debe mostrar el componente por defecto', () => {
		render(<MultipleCustomHooks />);

		expect(screen.getByText('BreakingBad Quotes'));
		expect(screen.getByText('Loading...'));

		const nextButton = screen.getByRole('button', { name: 'Next quote' });
		expect(nextButton.disabled).toBeTruthy();

		screen.debug();
	});
});
