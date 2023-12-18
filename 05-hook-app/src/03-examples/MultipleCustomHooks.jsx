import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

	//console.log({ data, isLoading, hasError });

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-1'>{data[0].quote}</p>
					<footer className='blockquote-footer'> {data[0].author}</footer>
				</blockquote>
			)}

			<button className='btn btn-primary'>Next quote</button>
		</>
	);
};
