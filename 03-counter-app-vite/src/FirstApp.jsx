import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
	// console.log(props)

	return (
		<>
			<div data-testid='test-title'> {title} </div>
			<p>{subTitle}</p>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
	// title: 'No hay ningún título',
	subTitle: 'No hay ningún subtitulo',
	name: 'Fernando Herrera',
};
