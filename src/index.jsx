import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, Global } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { store, persistor } from './redux/store';
import App from './components/App';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { muiTheme } from './styles/muiTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MuiThemeProvider theme={muiTheme}>
              <App />
            </MuiThemeProvider>
            <Global styles={GlobalStyles} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
