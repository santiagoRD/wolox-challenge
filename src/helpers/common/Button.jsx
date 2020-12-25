import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, classList, handleClick, type }) => (
  /* eslint-disable  react/button-has-type */
  <button type={type} className={classList} onClick={handleClick}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  classList: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  text: '',
  classList: 'btn',
  type: 'button',
  handleClick: () => {}
};
