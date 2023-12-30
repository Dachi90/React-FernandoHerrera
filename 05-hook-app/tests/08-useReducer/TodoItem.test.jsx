import { render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/components/TodoItem';

describe('Pruebas en el <TodoItem />', () => {
	const todo = {
		id: 1,
		description: 'Piedra del Alma',
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('Debe de mostrar el Todo pendiente de completar', () => {
		render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

		const spanElement = screen.getByLabelText('span');
		console.log(spanElement.className);
		expect(spanElement.className).toBe('align-self-center ');
	});
});
