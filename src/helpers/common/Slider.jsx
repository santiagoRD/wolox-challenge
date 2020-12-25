import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Slider.scss';
import Card from './Card';

const Slider = ({ items }) => {
  const [current, setCurrent] = useState(items[0]);

  const handleNext = () => {
    const nextItem = items.find(item => item.id === current.next);
    setCurrent(nextItem);
  };

  const handlePrev = () => {
    const prevItem = items.find(item => item.id === current.prev);
    setCurrent(prevItem);
  };

  return (
    <div className='slider__container'>
      <Button text='' classList='btn btn-slider-arrow-left' handleClick={handlePrev} />
      <Card image={current.image} alt={current.alt} text={current.text} clasList='item__container' />
      <Button text='' classList='btn btn-slider-arrow-right' handleClick={handleNext} />
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};
