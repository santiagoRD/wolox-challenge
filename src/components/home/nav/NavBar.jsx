import React from 'react';
import { connect } from 'react-redux';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import woloxNavIcon from '../../../assets/logo_full_color.svg';
import './NavBar.scss';

const NavBar = () => (
  <nav className='nav__container'>
    <div className='menu__container'>
      <NavLink smooth to='/#'>
        <img src={woloxNavIcon} alt='wolox-icon' />
      </NavLink>
      <ul className='list__container'>
        <li className='list__item'>
          <NavLink smooth to='/#'>
            Inicio
          </NavLink>
        </li>
        <li className='list__item'>
          <NavLink smooth to='/#benefits'>
            Beneficios
          </NavLink>
        </li>
        <li className='list__item'>
          <NavLink smooth to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default connect()(NavBar);
