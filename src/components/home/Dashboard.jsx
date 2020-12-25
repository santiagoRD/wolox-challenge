import React from 'react';
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
