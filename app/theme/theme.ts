import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Colors } from './colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

declare module '@mui/material/styles' {
  interface Components {
    MainMenuFrameComponent: {};
    GameButtonComponent: {};
  }
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MainMenuFrameComponent: {
      styleOverrides: {
        root: {
          width: 400,
          height: 600,
          border: `6px ${Colors.info}`,
          borderStyle: ' solid',
          borderRadius: '18px',
          background: Colors.blue,
        },
      },
    },
    GameButtonComponent: {
      styleOverrides: {
        root: {
          width: 200,
          height: 40,
          fontWeight: 900,
          fontSize: 20,
          border: `1px solid ${Colors.info}`,
          background: Colors.info,
          color: Colors.black,
        },
      },
    },
  },
});
