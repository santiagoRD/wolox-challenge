import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ classList, type, value, onChange, placeholder, name, maxLength, minLength, onBlur, onFocus, required, autoComplete, error }) => (
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
    />
    {error && <small className='error'>{error}</small>}
  </div>
);

export default Input;

Input.propTypes = {
  classList: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'checkbox', 'date', 'email', 'number', 'password', 'submit', 'tel', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool.isRequired,
  autoComplete: PropTypes.string,
  minLength: PropTypes.number
};

Input.defaultProps = {
  maxLength: 30,
  minLength: 1,
  type: 'text',
  onBlur: () => {},
  onFocus: () => {},
  autoComplete: 'off'
};
