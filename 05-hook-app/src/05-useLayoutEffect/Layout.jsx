import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {
	const { increment, counter } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
	const { author, quote } = !!data && data[0];

	//console.log({ data, isLoading, hasError });

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

			<button className='btn btn-primary' onClick={() => increment()} disabled={isLoading}>
				Next quote
			</button>
		</>
	);
};
