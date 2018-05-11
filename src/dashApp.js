import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import themes from './settings/themes';

import { themeConfig } from './settings';
import DashAppHolder from './dashAppStyle';
import Boot from './redux/boot';


const DashApp = () => (
  <IntlProvider >
    <ThemeProvider theme={themes[themeConfig.theme]}>
      <DashAppHolder>
        <Provider store={store}>
          <PublicRoutes history={history} />
        </Provider>
      </DashAppHolder>
    </ThemeProvider>
  </IntlProvider>
);
Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
