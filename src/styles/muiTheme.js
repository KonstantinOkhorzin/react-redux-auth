import { createTheme } from '@mui/material/styles';
import { theme } from './theme';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: {
      main: theme.colors.secondary,
    },
  },
});

