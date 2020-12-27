import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import TechnologiesPage from '../components/technologies-list/TechnologiesPage';
import Dashboard from '../components/home/Dashboard';
import LoginPage from '../components/login/LoginPage';
import RegistryPage from '../components/registry/RegistryPage';
import { userAuthentication } from '../actions/authActions';
import Modal from '../helpers/common/Modal';
import toggleModal from '../actions/notificationActions';

const AppRoutes = props => {
  const { logged, handleLogin, handleToggleModal, show, message } = props;

  useEffect(() => {
    const { token, email } = JSON.parse(localStorage.getItem('auth')) || {};
    if (token) {
      handleLogin(token, email, true);
    }
  }, [logged]);

  return (
    <Router>
      <Modal showModal={show} message={message} handleClose={() => handleToggleModal(false, '')} />
      <Switch>
        <PublicRoute exact path='/' logged={logged} component={propperties => <Dashboard {...propperties} />} />
        <PublicRoute exact logged={logged} path='/login' component={propperties => <LoginPage {...propperties} />} />
        <PublicRoute exact logged={logged} path='/registry' component={propperties => <RegistryPage {...propperties} />} />
        <PrivateRoute exact path='/admin' logged={logged} component={propperties => <TechnologiesPage {...propperties} />} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleLogin: userAuthentication, handleToggleModal: toggleModal }, dispatch);

const mapStateToProps = ({ auth, notification }) => ({
  logged: auth.user.logged,
  show: notification.show,
  message: notification.message
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);

AppRoutes.propTypes = {
  logged: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
};
