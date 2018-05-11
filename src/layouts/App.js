import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AsyncRoute, AsyncPrivateRoute } from './asyncComponents';

// import AutoLogoutOnIdle from 'components/AutoLogoutOnIdle';
// import RefreshToken from 'components/RefreshToken';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <span>
          <Router>
            <Switch>
              <AsyncRoute exact path="/login" loader={() => import('../views/Login')} />
              <AsyncPrivateRoute exact path="/dashboard" loader={() => import('../views/Dashboard')} />
              <AsyncPrivateRoute exact path="/dashboard/:company" loader={() => import('../views/Batches')} />
              <AsyncPrivateRoute exact path="/dashboard/:company/:batch" loader={() => import('../views/Batch')} />
            </Switch>
          </Router>
        </span>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
