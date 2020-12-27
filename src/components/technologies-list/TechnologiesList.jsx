import React from 'react';
import TechnologieItem from './TechnologieItem';

const TechnologiesList = ({ techs, handleSelectFavorite }) => (
  <main className='tech__main__container fade-in'>{techs ? techs.map(tech => <TechnologieItem key={tech.tech} {...tech} handleSelectFavorite={handleSelectFavorite} />) : ''}</main>
);

export default TechnologiesList;
