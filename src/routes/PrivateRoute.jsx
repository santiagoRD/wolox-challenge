import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, logged, ...rest }) => <Route {...rest} component={props => (logged ? <Component {...props} /> : <Redirect to='/login' />)} />;

export default PrivateRoute;

PrivateRoute.propTypes = {
  logged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};
