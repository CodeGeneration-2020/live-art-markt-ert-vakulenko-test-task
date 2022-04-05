import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiIcon: {
			styleOverrides: {
				fontSizeSmall: {
					// padding: 0,
					width: '.6em',
					height: '.6em'
				},
			},
		},
	},
});

export default theme;