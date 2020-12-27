import types from '../types/types';

const toggleModal = (show, message) => ({
  type: types.toggle,
  payload: {
    show,
    message
  }
});

export default toggleModal;
