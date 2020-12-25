import React from 'react';
import TwitterLogo from '../../../assets/twitter.svg';
import WoloxerLogo from '../../../assets/img_woloxer@3x.png';
import './FollowSection.scss';

const FollowSection = () => (
  <section className='follow__section'>
    <div className='follow__container woloxer__bg'>
      <img src={WoloxerLogo} alt='woloxer-logo' />
      <div>
        <h2 className='follow__title fade-up-down'>
          <span>350 + </span>
          <span> Woloxers</span>
        </h2>
        <div className='fade-down-up '>
          <div className='twitter__logo-container'>
            <img src={TwitterLogo} alt='twitter-logo' />
            <span> @Wolox</span>
          </div>
          <a href='https://www.twitter.com/wolox' target='_blank' rel='noreferrer' className='btn btn-outline'>
            Síguenos
          </a>
        </div>
      </div>
    </div>
    <div className='follow__container'>
      <h2 className='follow__title fade-in'>
        Trabajamos para
        <span> convertir </span>
        <span>ideas </span>
        en productos
      </h2>
    </div>
  </section>
);

export default FollowSection;
