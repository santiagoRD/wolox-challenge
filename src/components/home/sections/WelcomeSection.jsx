import React from 'react';
import IcIlustraHero from '../../../assets/Img Hero/Ic_ilustra_Hero@3x.png';
import './WelcomeSection.scss';

const WelcomeSection = () => (
  <section className='welcome__section'>
    <div className='welcome__container'>
      <h2 className='welcome__title fade-in'>
        Bienvenido a tu
        <b> Entrevista Técnica </b>
        en
        <span> Wolox</span>
      </h2>
    </div>
    <div className='welcome__container fade-right-left'>
      <img src={IcIlustraHero} alt='ilustra-hero' className='welcome__img' />
    </div>
  </section>
);

export default WelcomeSection;
