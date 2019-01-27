import React from 'react';
import { Provider } from 'react-redux';
import { store, history, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import PublicRoutes from './router';
import { ThemeProvider } from 'styled-components';
import themes from './config/themes';
import AppLocale from './languageProvider';
import { themeConfig } from './config';
import DashAppHolder from './dashAppStyle';
import Boot from './redux/boot';

const DashApp = ({locale}) => (
  <ThemeProvider theme={themes[themeConfig.theme]}>
    <DashAppHolder>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PublicRoutes history={history} />
        </PersistGate>
      </Provider>
    </DashAppHolder>
  </ThemeProvider>
);
Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp
export { AppLocale };