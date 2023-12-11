import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		//console.log(event.target.value);
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		//console.log(inputValue);

		if (inputValue.trim().length <= 1) return;
		onNewCategory(inputValue.trim());
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='Buscar Gifs' value={inputValue} onChange={onInputChange} />
		</form>
	);
};
