import React from 'react';
import PropTypes from 'prop-types';
import TechnologieItem from './TechnologieItem';

const TechnologiesList = ({ techs, handleSelectFavorite }) => (
  <main className='tech__main__container fade-in'>
    {techs.length ? (
      techs.map(tech => <TechnologieItem key={tech.tech} {...tech} handleSelectFavorite={handleSelectFavorite} />)
    ) : (
      <div className='no__items__found'>
        <h4>No existen elementos que coincidan con la búsqueda.</h4>
      </div>
    )}
  </main>
);

export default TechnologiesList;

TechnologiesList.propTypes = {
  techs: PropTypes.arrayOf(
    PropTypes.shape({
      tech: PropTypes.string,
      year: PropTypes.string,
      author: PropTypes.string,
      license: PropTypes.string,
      language: PropTypes.string,
      type: PropTypes.string,
      logo: PropTypes.string,
      favorite: PropTypes.bool
    })
  ).isRequired,
  handleSelectFavorite: PropTypes.func.isRequired
};
