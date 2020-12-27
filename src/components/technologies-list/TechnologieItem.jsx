import React from 'react';
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
