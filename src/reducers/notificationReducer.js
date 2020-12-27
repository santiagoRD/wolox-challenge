import types from '../types/types';

const initialState = {
  show: false,
  message: ''
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggle:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default notificationReducer;
