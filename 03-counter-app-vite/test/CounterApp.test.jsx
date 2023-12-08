import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el componente <CounterApp />', () => {
	const value = 100;
	test('Debe de hacer match con el snapshot', () => {
		const { containter } = render(<CounterApp value={value} />);
		expect(containter).toMatchSnapshot();
	});

	test('El valor de "value" debe ser 100', () => {
		render(<CounterApp value={value} />);
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
	});
});
