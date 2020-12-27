import React, { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import useForm from '../../hooks/useForm';
import Loader from '../../helpers/common/Loader';
import { validateOnlyNumbers, validateEmail, validatePassCoincidence, validatePasswordStructure } from '../../helpers/helpers';
import { BASE_URL, countriesOptions } from '../../helpers/constants';
import woloxNavIcon from '../../assets/logo_full_color.svg';
import { userRegistry, registryError } from '../../actions/registryActions';
import toggleModal from '../../actions/notificationActions';
import './RegistryPage.scss';

const Button = lazy(() => import('../../helpers/common/Button'));
const Input = lazy(() => import('../../helpers/common/Input'));
const Dropdown = lazy(() => import('../../helpers/common/Dropdown'));

const RegistryPage = props => {
  const [registryValues, handleInputChange, handleReset] = useForm({
    name: '',
    lastName: '',
    country: '',
    province: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    conditions: false
  });
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [error, setError] = useState({});
  const { name, lastName, country, province, email, phone, password, confirmPassword, conditions } = registryValues;
  const { handleCreateUser, errorRequest, handleRegistryError, handleToggleModal } = props;

  useEffect(() => {
    if (country) setProvinceOptions(countriesOptions.find(option => option.name === country).provinces);
  }, [country]);

  const handleOnlyNumbers = e => {
    if (validateOnlyNumbers(e.target.value)) {
      handleInputChange(e);
    } else {
      handleReset({ ...registryValues, phone: registryValues?.phone || '' });
    }
  };

  const handleSetError = inputName => {
    setError({
      ...error,
      [inputName]: 'error'
    });
  };

  const handleResetError = ({ target }) => {
    setError({
      ...error,
      [target.name]: ''
    });
  };

  const handleValidateEmail = ({ target }) => {
    if (target.value === '') return;
    if (!validateEmail(target.value)) handleSetError('email');
  };
  const handleValidateStructure = ({ target }) => {
    if (target.value === '') return;
    const [containNumbers, containCharacters] = validatePasswordStructure(target.value);
    if (!containCharacters || !containNumbers || target.value.length < 6) handleSetError('password');
  };

  const handleConfirmPass = ({ target }) => {
    if (target.value === '') return;
    if (!validatePassCoincidence(password, target.value)) handleSetError('confirmPassword');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let errorsSubmit = {};
    if (!name) errorsSubmit = { ...errorsSubmit, name: 'error' };
    if (!lastName) errorsSubmit = { ...errorsSubmit, lastName: 'error' };
    if (!country) errorsSubmit = { ...errorsSubmit, country: 'error' };
    if (!province) errorsSubmit = { ...errorsSubmit, province: 'error' };
    if (!phone) errorsSubmit = { ...errorsSubmit, phone: 'error' };
    if (!email) errorsSubmit = { ...errorsSubmit, email: 'error' };
    if (!password) errorsSubmit = { ...errorsSubmit, password: 'error' };
    if (!confirmPassword || error.confirmPassword) errorsSubmit = { ...errorsSubmit, confirmPassword: 'error' };

    if (!Object.keys(errorsSubmit).length) {
      let message = '';
      try {
        const { token } = await axios.post(`${BASE_URL}/signup`, { name, last_name: lastName, country, province, mail: email, phone, password });
        handleCreateUser({
          name,
          lastName,
          country,
          province,
          phone,
          email,
          password,
          conditions,
          token
        });
        message = 'Genial, el registro fue exitoso!!';
        handleReset({ name: '', lastName: '', country: '', province: '', email: '', phone: '', password: '', confirmPassword: '' });
      } catch (err) {
        handleRegistryError(`Ha ocurrido un error en el registro ${err}`);
        message = 'Ups algo salió mal con el registro, intentalo de nuevo.';
      }
      handleToggleModal(true, message);
      return;
    }
    setError({ ...error, ...errorsSubmit });
  };

  return (
    <Suspense fallback={<Loader />}>
      <section className='registry__section'>
        <div className='login__header'>
          <Link to='/'>
            <img src={woloxNavIcon} alt='wolox-icon' />
          </Link>
        </div>
        <form className='registry__container' onSubmit={handleSubmit}>
          <Input
            classList={error?.name || ''}
            type='text'
            value={name}
            onFocus={handleResetError}
            onChange={handleInputChange}
            placeholder='Ingresa tu nombre'
            name='name'
            maxLength={30}
            required
            error={error?.name ? 'El campo nombre es requerido' : ''}
          />
          <Input
            classList={error?.lastName || ''}
            type='text'
            value={lastName}
            onFocus={handleResetError}
            onChange={handleInputChange}
            placeholder='Ingresa tu apellido'
            name='lastName'
            maxLength={30}
            required
            error={error?.lastName ? 'El campo apellido es requerido' : ''}
          />
          <Dropdown
            classList={error?.country || ''}
            options={countriesOptions}
            name='country'
            placeholder='Elige tu país'
            selected={country}
            onFocus={handleResetError}
            onChange={handleInputChange}
            required
            error={error?.country ? 'Debes seleccionar tu país' : ''}
          />
          {country && (
            <Dropdown
              classList={error?.province || ''}
              options={provinceOptions}
              name='province'
              placeholder='Elige tu provincia'
              selected={province}
              onFocus={handleResetError}
              onChange={handleInputChange}
              required
              error={error?.province ? 'Debes seleccionar tu provincia' : ''}
            />
          )}
          <Input
            classList={error?.phone || ''}
            type='tel'
            value={phone}
            onFocus={handleResetError}
            onChange={handleOnlyNumbers}
            placeholder='Ingresa tu teléfono'
            name='phone'
            maxLength={10}
            required
            error={error?.phone ? 'El campo teléfono es requerido' : ''}
          />
          <Input
            classList={error?.email || ''}
            type='email'
            value={email}
            onFocus={handleResetError}
            onChange={handleInputChange}
            onBlur={handleValidateEmail}
            placeholder='Ingresa tu email'
            name='email'
            required
            error={error?.email ? 'Correo ingresado no valido' : ''}
          />
          <Input
            classList={error?.password || ''}
            type='password'
            value={password}
            onFocus={handleResetError}
            onChange={handleInputChange}
            onBlur={handleValidateStructure}
            placeholder='Ingresa tu contraseña'
            name='password'
            required
            minLength={6}
            error={error?.password ? 'Este campo debe ser alfanumérico y mínimo 6 caracteres' : ''}
          />
          <Input
            classList={error?.confirmPassword || ''}
            type='password'
            value={confirmPassword}
            onFocus={handleResetError}
            onChange={handleInputChange}
            onBlur={handleConfirmPass}
            placeholder='Repite la contraseña'
            name='confirmPassword'
            required
            minLength={6}
            error={error?.confirmPassword ? 'Las constraseñas no coinciden' : ''}
          />
          <Input
            type='checkbox'
            value={conditions}
            onChange={e => handleInputChange(e, true)}
            placeholder=''
            name='conditions'
            id='terms-and-conditions'
            htmlFor='terms-and-conditions'
            labelText='Acepto los términos y condiciones.'
            required
            error={error?.conditions ? 'Debes aceptar los términos y condiciones' : ''}
          />
          <Button text='Registrarme' classList='btn btn-bg-blue btn-outline' type='submit' />
        </form>
        {errorRequest && <small className='error'>{errorRequest}</small>}
      </section>
    </Suspense>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleCreateUser: userRegistry, handleRegistryError: registryError, handleToggleModal: toggleModal }, dispatch);
const mapStateToProps = ({ error }) => ({
  errorRequest: error
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistryPage);
