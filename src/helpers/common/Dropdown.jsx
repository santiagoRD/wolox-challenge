import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, name, placeholder, selected, onChange, classList }) => (
  <div className='custom__select'>
    <select name={name} placeholder={placeholder} value={selected} onChange={onChange} classList={classList}>
      <option default value=''>
        {placeholder}
      </option>
      {options.map(option => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  classList: PropTypes.string
};

Dropdown.defaultProps = {
  selected: '',
  classList: ''
};
