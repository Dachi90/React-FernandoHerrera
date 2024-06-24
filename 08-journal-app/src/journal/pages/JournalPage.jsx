import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
	const dispatch = useDispatch();

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto ipsum nulla ratione omnis. Laudantium minima tenetur officiis ad! Voluptate optio temporibus exercitationem. Odio ad exercitationem accusantium dolorem eaque similique.</Typography> */}

			<NothingSelectedView />

			{/* <NoteView /> */}

			<IconButton
				onClick={onClickNewNote}
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.7 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
