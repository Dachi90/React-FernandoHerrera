import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
	const onAddCategory = () => {
		//setCategories([...categories, 'Super Campeones']);
		setCategories(['Super Campeones', ...categories]);
	};

	return (
		<>
			{/* título */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory />

			{/* Listado de Gifs */}
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
			{/* Gif Item */}
		</>
	);
};
