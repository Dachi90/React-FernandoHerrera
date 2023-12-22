import { useReducer } from 'react';
import { todoReducer } from './TodoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		desciption: 'Recolectar la piedra del alma',
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		desciption: 'Recolectar la piedra del alma',
		done: false,
	},
];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);
	return (
		<>
			<h1>TodoApp</h1>
			<hr />
			<ul>
				<li>item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</>
	);
};
