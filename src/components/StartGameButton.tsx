import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import {selectDifAction} from '../app/game/actions';
import {getGameSelector} from '../app/game/selectors';
import {ROUTES} from '../common/constants';

type Props = React.PropsWithChildren<{
	title: string;
	difValue: number | string;
}>;

const StartButton = ({title, difValue}: Props) => {
	const dispatch = useDispatch();
	const {difficult} = useSelector(getGameSelector);
	const navigate = useNavigate();
	const selectHandler = () => {
		dispatch(selectDifAction(difValue));
		// navigate(ROUTES.GAME, { replace: true });
		navigate(ROUTES.GAME);
	};

	return (
		<Button key={difValue} disabled={difficult === difValue} onClick={selectHandler}>{title}</Button>
	);
};

export default StartButton;
