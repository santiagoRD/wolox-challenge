import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, alt, text, clasList }) => (
  <div className={clasList}>
    <img src={image} alt={alt} />
    <span>{text}</span>
  </div>
);

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clasList: PropTypes.string.isRequired
};
