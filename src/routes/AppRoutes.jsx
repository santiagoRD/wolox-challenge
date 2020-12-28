import React, { lazy, Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { userAuthentication } from '../actions/authActions';
import Modal from '../helpers/common/Modal';
import toggleModal from '../actions/notificationActions';
import Loader from '../helpers/common/Loader';

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const PublicRoute = lazy(() => import('./PublicRoute'));
const TechnologiesPage = lazy(() => import('../components/technologies-list/TechnologiesPage'));
const Dashboard = lazy(() => import('../components/home/Dashboard'));
const LoginPage = lazy(() => import('../components/login/LoginPage'));
const RegistryPage = lazy(() => import('../components/registry/RegistryPage'));
const TermAndConditions = lazy(() => import('../components/terms-and-conditions/TermAndConditions'));

const AppRoutes = props => {
  const { logged, handleLogin, handleToggleModal, show, message } = props;

  useEffect(() => {
    const { token = '', email = '', logged: isLogged = false } = JSON.parse(localStorage.getItem('auth')) || {};
    if (token) {
      handleLogin(token, email, isLogged);
    }
  }, [logged]);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Modal showModal={show} message={message} handleClose={() => handleToggleModal(false, '')} />
        <Switch>
          <PublicRoute exact path='/' logged={logged} component={propperties => <Dashboard {...propperties} />} />
          <PublicRoute exact logged={logged} path='/login' component={propperties => <LoginPage {...propperties} />} />
          <PublicRoute exact logged={logged} path='/registry' component={propperties => <RegistryPage {...propperties} />} />
          <PublicRoute exact path='/terms-and-conditions' logged={logged} component={propperties => <TermAndConditions {...propperties} />} />
          <PrivateRoute exact path='/admin' logged={logged} component={propperties => <TechnologiesPage {...propperties} />} />
        </Switch>
      </Router>
    </Suspense>
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
  handleLogin: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  message: PropTypes.string
};

AppRoutes.defaultProps = {
  message: ''
};
