import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
	const onAddCategory = (newCategory) => {
		console.log(newCategory);
		//setCategories([...categories, newCategory]);
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			{/* título */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				// setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/* Listado de Gifs */}
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
			{/* Gif Item */}
		</>
	);
};
