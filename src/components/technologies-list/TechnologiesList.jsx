import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../../actions/authActions';
import { noop } from '../../helpers/helpers';

const TechnologiesList = props => {
  const { handleLogout } = props;

  const handleUserLogout = () => {
    localStorage.removeItem('auth');
    handleLogout();
  };
  return (
    <div>
      <h1>Listado de tecnologias</h1>
      <hr />
      <button type='button' onClick={handleUserLogout}>
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleLogout: userLogout }, dispatch);

export default connect(noop, mapDispatchToProps)(TechnologiesList);
