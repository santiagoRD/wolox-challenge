import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ classList, type, value, onChange, placeholder, name, maxLength, minLength, onBlur, onFocus, required, autoComplete, error, id, htmlFor, labelText }) => (
  <div className='input__container'>
    <input
      className={classList}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      name={name}
      maxLength={maxLength}
      autoComplete={autoComplete}
      minLength={minLength}
      id={id}
    />
    {type === 'checkbox' && <label htmlFor={htmlFor}>{labelText}</label>}
    {error && <small className='error'>{error}</small>}
  </div>
);

export default Input;

Input.propTypes = {
  classList: PropTypes.string,
  type: PropTypes.oneOf(['button', 'checkbox', 'date', 'email', 'number', 'password', 'submit', 'tel', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool.isRequired,
  autoComplete: PropTypes.string,
  minLength: PropTypes.number,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  error: PropTypes.string
};

Input.defaultProps = {
  classList: '',
  maxLength: 30,
  minLength: 1,
  type: 'text',
  onBlur: () => {},
  onFocus: () => {},
  autoComplete: 'off',
  id: '',
  htmlFor: '',
  error: ''
};
