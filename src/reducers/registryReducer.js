import types from '../types/types';

const initialState = {
  user: {
    name: '',
    lastName: '',
    country: '',
    province: '',
    email: '',
    phone: '',
    password: '',
    condditions: false,
    token: ''
  },
  error: ''
};

const registryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createUser:
      return { ...state, user: action.payload };

    case types.registryError:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default registryReducer;
