import React from 'react';
import PropTypes from 'prop-types';
import starWhite from '../../assets/star.svg';
import starYellow from '../../assets/star-yellow.svg';

const TechnologieItem = ({ tech, year, author, license, language, type, logo, favorite, handleSelectFavorite }) => (
  <div className='tech__card__container'>
    <img src={logo} alt={tech} />
    <div className='tech__card__body'>
      <div className='tech__card__description'>
        <h4>{tech}</h4>
        <p>
          {author} - {year}
        </p>
        <p>{license}</p>
        <p>
          {language} - {type}
        </p>
      </div>
      <button type='button' className='tech__card__fav' onClick={() => handleSelectFavorite(tech)}>
        <img src={favorite ? starYellow : starWhite} alt='fav-star' />
      </button>
    </div>
  </div>
);

export default TechnologieItem;

TechnologieItem.propTypes = {
  tech: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  license: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  handleSelectFavorite: PropTypes.func.isRequired
};
