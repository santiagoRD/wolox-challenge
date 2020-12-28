import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PublicRoute from '../../routes/PublicRoute';
import HomePage from './HomePage';
import NavBar from './nav/NavBar';

const Dashboard = ({ logged }) => (
  <>
    <NavBar />
    <div>
      <Switch>
        <PublicRoute exact logged={logged} path='/' component={HomePage} />
      </Switch>
    </div>
  </>
);

export default Dashboard;

Dashboard.propTypes = {
  logged: PropTypes.bool
};

Dashboard.defaultProps = {
  logged: false
};
