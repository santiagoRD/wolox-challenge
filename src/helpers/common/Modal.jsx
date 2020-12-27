import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Modal.scss';

const Modal = ({ showModal, message, handleClose }) => (
  <div className={`modal ${showModal ? 'show__modal' : 'hidde__modal'}`}>
    <main className='modal__main'>
      <p>{message}</p>
      <Button type='button' classList='btn btn-outline btn-color-blue' text='Continuar' handleClick={handleClose} />
    </main>
  </div>
);

export default Modal;

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};
