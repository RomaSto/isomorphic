import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn
      ? <Component {...props} />
      : <Redirect
        to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
      />)}
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path={'/signin'}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      />
      <RestrictedRoute
        path="/scrapers"
        component={App}
        isLoggedIn={isLoggedIn}
      />
    </div>
  </ConnectedRouter>
);

export default connect(state => ({
  isLoggedIn: state.Auth.get('idToken') !== null,
}))(PublicRoutes);
