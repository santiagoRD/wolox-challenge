import React, { useState, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../../helpers/common/Loader';
import useForm from '../../hooks/useForm';
import { validateEmail } from '../../helpers/helpers';
import { userAuthentication, authError } from '../../actions/authActions';
import { BASE_URL } from '../../helpers/constants';
import woloxNavIcon from '../../assets/logo_full_color.svg';
import './LoginPage.scss';

const Button = lazy(() => import('../../helpers/common/Button'));
const Input = lazy(() => import('../../helpers/common/Input'));

const LoginPage = props => {
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });
  const [error, setError] = useState({});

  const { email, password } = formValues;
  const { handleLogin, history, handleError, errorRequest } = props;

  const handleSubmit = async e => {
    e.preventDefault();
    if (email && password) {
      try {
        const body = {
          email,
          password
        };
        const {
          data: { token }
        } = await axios.post(`${BASE_URL}/login`, body);
        handleLogin(token, email, true);
        const auth = {
          token,
          email,
          logged: true
        };
        localStorage.setItem('auth', JSON.stringify(auth));
        history.replace('/admin');
      } catch (err) {
        handleError(`Error en el login ${err}`);
      }
    }
  };

  const handleResetError = ({ target }) => {
    setError({
      ...error,
      [target.name]: ''
    });
  };

  const handleValidateEmail = ({ target }) => {
    if (!target.value.trim()) return;
    if (!validateEmail(target.value)) {
      setError({
        ...error,
        email: 'error'
      });
    } else {
      setError({
        ...error,
        email: ''
      });
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <section className='login__section'>
        <div className='login__header'>
          <Link to='/'>
            <img src={woloxNavIcon} alt='wolox-icon' />
          </Link>
        </div>
        <h2>Bienvenido</h2>
        <form className='form__container' onSubmit={handleSubmit}>
          <div className='form__input__container w-100'>
            <Input
              classList={`${error?.email || ''}`}
              type='email'
              value={email}
              onChange={handleInputChange}
              onBlur={handleValidateEmail}
              onFocus={handleResetError}
              placeholder='Ingresa tu email'
              name='email'
              maxLength={30}
              required
              error={error?.email ? 'Correo ingresado no valido' : ''}
            />
            <Input
              classList={`${error?.passError ? 'error' : ''}`}
              type='password'
              value={password}
              onChange={handleInputChange}
              placeholder='Ingresa tu contraseña'
              name='password'
              required
            />
          </div>
          <div className='form__input__container w-100'>
            <Button type='submit' text='Ingresar' classList='btn btn-bg-blue btn-outline w-100' />
            <Link to='/registry'>
              No tienes cuenta? registrate <span>aquí.</span>
            </Link>
          </div>
        </form>
        {errorRequest && <small className='error'>{errorRequest}</small>}
      </section>
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleLogin: userAuthentication, handleError: authError }, dispatch);
const mapStateToProps = ({ error }) => ({ errorRequest: error });

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

LoginPage.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func
  }).isRequired
};
