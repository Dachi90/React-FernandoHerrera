import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

const draweWith = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box
			sx={{ display: 'flex' }}
			className='animate__animated animate__fadeIn animate__faster'
		>
			<NavBar draweWith={draweWith} />

			<SideBar drawerWith={draweWith} />
			<Box
				component='main'
				sx={{ flexGrow: 3, p: 3 }}
			>
				<Toolbar />

				{children}
			</Box>
		</Box>
	);
};
