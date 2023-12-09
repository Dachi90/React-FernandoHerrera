import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el componente <CounterApp />', () => {
	const value = 10;
	test('Debe de hacer match con el snapshot', () => {
		const { containter } = render(<CounterApp value={value} />);
		expect(containter).toMatchSnapshot();
	});

	test('El valor de "value" debe ser 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
	});

	test('Debe de incrementar cn el botón +1', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('+1'));
		expect(screen.getByText('11')).toBeTruthy();
	});

	test('Debe de decrementar cn el botón -1', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('-1'));
		expect(screen.getByText('9')).toBeTruthy();
	});

	test('Debe de funcioanr el botón de reset', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		//screen.debug();

		//fireEvent.click(screen.getByText('Reset'));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		//screen.debug();
		expect(screen.getByText('10')).toBeTruthy();
	});
});
