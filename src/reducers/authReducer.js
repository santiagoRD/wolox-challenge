import types from '../types/types';

const initialState = {
  user: {
    token: '',
    email: '',
    logged: false
  },
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      return { ...state, user: { ...action.payload } };
    }
    case types.logout:
      return { ...state, user: { ...state.user, logged: false } };

    case types.authError:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default authReducer;
