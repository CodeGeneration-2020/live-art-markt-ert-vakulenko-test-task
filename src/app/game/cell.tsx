import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import cx from 'classnames';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded';
import { red, blue } from '@mui/material/colors';

import {selectCellAction} from './actions';

import {CELL_EMPTY_PLACEHOLDER, CELL_MINE_PLACEHOLDER} from "../../common/constants";

import './cell.css';

type Props = React.PropsWithRef<{
	value: number | string;
	x: number;
	y: number;
}>;

// TODO That can be get more efficiency if change and restruct compute logic with unnecessary calculations
const GameCellComponent = ({value, x, y}: Props) => {
	const [flag, setFlag] = useState(false);
	const [question, setQuestion] = useState(false);
	const ref = useRef(null);
	const dispatch = useDispatch();

	const IS_EMPTY = value === CELL_EMPTY_PLACEHOLDER;
	const IS_MINE = value === CELL_MINE_PLACEHOLDER;
	const IS_CLOSE = isNaN(Number(value));

	const cellClickHandler = (ev: React.MouseEvent) => {
		// ev.stopPropagation();
		ev.preventDefault();

		if (ev.type === 'click' && !flag) {
			leftClick();
		} else if (ev.type === 'contextmenu') {
			rightClick();
		}
	};
	const leftClick = () => {
		dispatch(selectCellAction(x, y))
	};
	const rightClick = () => {
		if (!flag && !question) {
			setFlag(true);
		} else if (flag) {
			setFlag(false);
			setQuestion(true);
		} else {
			setFlag(false);
			setQuestion(false);
		}
	};

	function getContent() {
		if (IS_MINE) {
			return <BrightnessHighRoundedIcon fontSize="small" sx={{ color: red[700] }}/>
		} else if (flag) {
			return <FlagRoundedIcon fontSize="small" sx={{ color: red[300] }}/>
		} else if (question) {
			return <QuestionMarkRoundedIcon fontSize="small" sx={{ color: blue[800] }}/>
		}

		return value;
	}

	return (
		<span
			ref={ref}
			className={cx("game-cell", {
				'game-cell-close': IS_CLOSE,
				'game-cell-empty': IS_EMPTY,
				'game-mine': IS_MINE,
				'game-flag': flag,
				'game-question': question,
			})}
			onClick={cellClickHandler}
			onContextMenu={cellClickHandler}
		>
			{getContent()}
		</span>
	)
};

export default GameCellComponent;
