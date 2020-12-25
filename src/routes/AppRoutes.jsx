import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import TechnologiesList from '../components/technologies-list/TechnologiesList';
import Dashboard from '../components/home/Dashboard';
import LoginPage from '../components/login/LoginPage';
import RegistryPage from '../components/registry/RegistryPage';
import { userAuthentication } from '../actions/authActions';

const AppRoutes = props => {
  const { logged, handleLogin } = props;
  useEffect(() => {
    const { token, email } = JSON.parse(localStorage.getItem('auth')) || {};

    // eslint-disable-next-line no-console
    if (token) {
      handleLogin(token, email, true);
    }
  }, [logged]);

  // eslint-disable-next-line no-console
  console.log('logged ==> ', logged);
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/' logged={logged} component={Dashboard} />
        <PublicRoute exact logged={logged} path='/login' component={LoginPage} />
        <PublicRoute exact logged={logged} path='/registry' component={RegistryPage} />
        <PrivateRoute exact path='/admin' logged={logged} component={TechnologiesList} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleLogin: userAuthentication }, dispatch);

const mapStateToProps = ({ auth }) => ({
  logged: auth.logged
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);

AppRoutes.propTypes = {
  logged: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
};
