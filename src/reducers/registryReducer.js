import types from '../types/types';

const initialState = {
  name: '',
  lastName: '',
  country: '',
  province: '',
  email: '',
  phone: '',
  pass: ''
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createUser:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default registryReducer;
