import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import Loading from '../components/utility/loader';
import PrivateRoute from '../components/PrivateRoute';

export const toAsync = loader =>
  Loadable({
    loader,
    loading: Loading,
  });

export const AsyncRoute = ({ loader, ...props }) =>
  <Route {...props} component={toAsync(loader)} />;

AsyncRoute.propTypes = {
  loader: PropTypes.func.isRequired,
};

export const AsyncPrivateRoute = ({ loader, ...props }) =>
  <PrivateRoute {...props} component={toAsync(loader)} />;

AsyncPrivateRoute.propTypes = {
  loader: PropTypes.func.isRequired,
};
