import React, {useState} from 'react';
import cx from 'classnames';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import StartButton from './StartGameButton';

const buttons = [
	<StartButton key="1" title="Beginner" difValue="1" />,
	<StartButton key="2" title="Normal" difValue="2" />,
	<StartButton key="3" title="Hard" difValue="3" />,
	<StartButton key="4" title="Expert" difValue="4" />,
];

const HomeComponent = () => {
	const [showDifficult, toggleDifficult] = useState(true);

	const toggleDifHandler = () => toggleDifficult(!showDifficult);

	return (
		<div className="home-screen">
			<Button variant="contained" onClick={toggleDifHandler}>New Game</Button>

			<Box
				className={cx({
					hide: showDifficult
				})}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					'& > *': {
						m: 1,
					},
				}}
			>
				<ButtonGroup size="small" aria-label="small button group">
					{buttons}
				</ButtonGroup>
			</Box>
		</div>
	)
};

export default HomeComponent;
