import React from 'react';
import Card from '../../../helpers/common/Card';
import Slider from '../../../helpers/common/Slider';
import { sliderOptions } from '../../../helpers/constants';
import './BenefitsSection.scss';

const BenefitsSection = () => (
  <section className='tech__section' id='benefits'>
    <div className='tech__container'>
      <h2 className='tech__title'>
        Entre los beneficios que ofrecemos se encuentran
        <span> ;)</span>
      </h2>
    </div>
    <div className='tech__container'>
      <div className='only-desktop'>
        <div className='tech__list-container'>
          {sliderOptions.map(item => (
            <Card image={item.image} alt={item.alt} text={item.text} clasList='card__item' key={item.id} />
          ))}
        </div>
      </div>
      <div className='slider__container__responsive'>
        <div className='only-responsive'>
          <Slider items={sliderOptions} />
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
