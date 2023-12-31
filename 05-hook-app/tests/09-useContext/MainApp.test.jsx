import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Priebas en el componente <MainApp/>', () => {
	test('Debe de mostrar el Homepage', () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('HomePage')).toBeTruthy();
	});

	test('Debe de mostrar el LoginPage', () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText('LoginPage')).toBeTruthy();
	});
});
