import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
	return (
		<JournalLayout>
			{/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto ipsum nulla ratione omnis. Laudantium minima tenetur officiis ad! Voluptate optio temporibus exercitationem. Odio ad exercitationem accusantium dolorem eaque similique.</Typography> */}

			{/* Nothing selected */}
			{/* <NothingSelectedView /> */}

			{/* NoteView */}
			<NoteView />
		</JournalLayout>
	);
};
