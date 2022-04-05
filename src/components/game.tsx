import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {getGameSelector} from '../app/game/selectors';
import GameCellComponent from '../app/game/cell';
import {clearAction} from "../app/game/actions";

import {ROUTES, BREACK_LINE} from "../common/constants";

const GameScreenComponent = () => {
	const {map, difficult, gameEnded} = useSelector(getGameSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const lines = map?.split(BREACK_LINE);

	function moveHomePage() {
		navigate(ROUTES.HOME, { replace: true });
		dispatch(clearAction());
	}

	useEffect(() => {
		if (gameEnded || (map?.length === 0) && !difficult) {
			moveHomePage();
		}
	}, []);

	return (
		<div className="game-screen">
			<Box sx={{ maxWidth: '70vw', maxHeight: '60vh', overflow: 'auto'}}>
				{
					lines.map((line: string, x) => (
						<Stack direction="row" spacing={0}>
							<Box sx={{ display: 'inline-flex' }}>
								{line.split('').map((val: string, y) => (
									<GameCellComponent
										key={`${x}_${y}`}
										x={x}
										y={y}
										value={val}
									/>
								))}
							</Box>
						</Stack>
					))
				}
			</Box>
			<Box>
				<Button onClick={moveHomePage}>back to menu</Button>
			</Box>
		</div>
	)
};

export default GameScreenComponent;
