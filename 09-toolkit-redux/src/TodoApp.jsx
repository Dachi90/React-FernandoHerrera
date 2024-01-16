import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {
	const [todoId, setTodoId] = useState(1);

	//const { data: todo = [], isLoading } = useGetTodosQuery(1);
	const { data: todo, isLoading } = useGetTodoQuery(todoId);

	const nextTodo = () => {
		setTodoId(todoId + 1);
	};

	const prevTodo = () => {
		if (todoId === 1) return;
		setTodoId(todoId - 1);
	};

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />
			<h4>IsLoading {isLoading ? 'true' : 'false'}</h4>

			<pre>{JSON.stringify(todo)}</pre>

			<button onClick={prevTodo}>Prev TODO</button>
			<button onClick={nextTodo}>Next TODO</button>

			{/* <ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<strong>{todo.completed ? 'DONE ' : 'PENDING '}</strong>
						{todo.title}
					</li>
				))}
			</ul> */}
		</>
	);
};
