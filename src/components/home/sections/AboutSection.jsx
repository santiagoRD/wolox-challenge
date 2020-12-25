import React from 'react';
import woloxFooterIcon from '../../../assets/Ic_Wolox_Footer.svg';

import './About.scss';

const AboutSection = () => (
  <section className='about__section'>
    <div className='about__container fade-in'>
      <h2 className='about__title'>
        Gracias por
        <span> completar el ejercicio</span>
      </h2>
      <h4 className='about__subtitle'>Te invitamos a ver mas información</h4>
      <a href='https://www.wolox.com.ar/' target='_blank' rel='noreferrer' className='about__link btn btn-bg-blue btn-outline'>
        Conocer más
      </a>
    </div>
    <img src={woloxFooterIcon} alt='wolox-footer' className='about__footer-img fade-down-up' />
  </section>
);

export default AboutSection;
