import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useTodo } from '../hooks';

export const TodoApp = () => {
	const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

	return (
		<>
			<h1>
				TodoApp: {todosCount} - <small>Pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
				</div>
				<div className='col-5'>
					<h4>Aregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
