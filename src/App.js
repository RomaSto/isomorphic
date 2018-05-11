import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import themes from './settings/themes';

import { themeConfig } from './settings';
import AppHolder from './AppStyle';
import Boot from './redux/boot';


const App = () => (
  <IntlProvider >
    <ThemeProvider theme={themes[themeConfig.theme]}>
      <AppHolder>
        <Provider store={store}>
          <PublicRoutes history={history} />
        </Provider>
      </AppHolder>
    </ThemeProvider>
  </IntlProvider>
);
Boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
