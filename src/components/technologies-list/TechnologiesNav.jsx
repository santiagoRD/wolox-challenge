import React from 'react';
import Input from '../../helpers/common/Input';
import Button from '../../helpers/common/Button';
import starYellow from '../../assets/star-yellow.svg';

const TechnologiesNav = ({ searchText, handleInputChange, favorites, handleSortAsc, handleSortDesc, handleUserLogout }) => (
  <nav className='tech__nav__container'>
    <Input classList='' type='text' value={searchText} onChange={handleInputChange} required={false} placeholder='Encuentra tu tecnología' name='searchText' labelText='' />
    <div className='tech__nav__right'>
      <div className='tech__nav__filters'>
        <Button text='' classList='btn' handleClick={handleSortAsc} type='button' />
        <Button text='' classList='btn' handleClick={handleSortDesc} type='button' />
      </div>
      <div className='tech__nav__favs'>
        {!!favorites && (
          <>
            <img src={starYellow} alt='favorite-techs' />
            <span>{favorites}</span>
          </>
        )}
      </div>
      <Button text='' classList='btn-logout' handleClick={handleUserLogout} type='button' />
    </div>
  </nav>
);

export default TechnologiesNav;
