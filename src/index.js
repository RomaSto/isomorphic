import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import store from './store';
import moment from 'moment';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

// for playing
if (process.env.NODE_ENV === 'development') {
  window.store = store;
  window.moment = moment;
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, document.getElementById('root'));
  });
}
registerServiceWorker();
