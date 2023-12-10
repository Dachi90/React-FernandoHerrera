import { useState } from 'react';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);
	console.log(categories);

	return (
		<>
			{/* título */}
			<h1>GifExpertApp</h1>

			{/* Input */}

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
