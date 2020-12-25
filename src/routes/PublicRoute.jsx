import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, logged, ...rest }) => <Route {...rest} render={props => (!logged ? <Component {...props} /> : <Redirect to='/admin' />)} />;

export default PublicRoute;

PublicRoute.propTypes = {
  logged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};
