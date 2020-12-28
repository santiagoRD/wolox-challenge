import React from 'react';
import PropTypes from 'prop-types';

const TechnologiesFooter = ({ total }) => (
  <footer className='tech__footer__container'>
    <div>
      <h4>Total: {total}</h4>
    </div>
  </footer>
);

export default TechnologiesFooter;

TechnologiesFooter.propTypes = {
  total: PropTypes.number
};

TechnologiesFooter.defaultProps = {
  total: 0
};
