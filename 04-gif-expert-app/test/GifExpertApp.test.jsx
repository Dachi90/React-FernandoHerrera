import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
	const newCategory = 'Saitama';
	test('Debe añadir las gategorias nuevas ', () => {
		render(<GifExpertApp />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: newCategory + '2' } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: newCategory + '3' } });
		fireEvent.submit(form);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
	});

	test('No debe agregar una categoria si ya existe', () => {
		render(<GifExpertApp />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
	});
});
