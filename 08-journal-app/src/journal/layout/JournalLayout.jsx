import { Box } from '@mui/system';
import { NavBar } from '../components';

const draweWith = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<NavBar draweWith={draweWith} />

			{/* Sidebar  draweWith*/}
			<Box
				component='main'
				sx={{ flexGrow: 3, p: 3 }}
			>
				{/* Toolbar */}

				{children}
			</Box>
		</Box>
	);
};
