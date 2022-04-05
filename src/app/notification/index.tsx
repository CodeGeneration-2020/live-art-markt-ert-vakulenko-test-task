import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

import {clearAction} from '../game/actions';
import {getGameSelector} from '../game/selectors';

import {END_MESSAGE, ROUTES} from "../../common/constants";

function SlideTransition(props: SlideProps) {
	return <Slide {...props} direction="up" />;
}

const NotificationAlerts = () => {
	const dispatch = useDispatch();
	const {message, gameEnded} = useSelector(getGameSelector);
	const navigate = useNavigate();

	const closeAlertHandler = () => {
		dispatch(clearAction());
		navigate(ROUTES.HOME, { replace: true });
	};

	const isLose = END_MESSAGE === message;

	return (
		<Snackbar
			open={gameEnded}
			onClose={closeAlertHandler}
			TransitionComponent={SlideTransition}
			message={message}
			key={SlideTransition.name}
			autoHideDuration={isLose ? undefined : 6000}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert severity={isLose ? "warning" : "success"} sx={{ width: '100%' }}>
				<Box minWidth={200} display="flex" justifyContent="space-between" alignItems="center">
					{message}
					<Button color="success" variant="outlined" size="small" onClick={closeAlertHandler}>
						Restart
					</Button>
				</Box>
			</Alert>
		</Snackbar>
	);
};

export default NotificationAlerts;
