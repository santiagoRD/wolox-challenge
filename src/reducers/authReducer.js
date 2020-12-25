import types from '../types/types';

const initialState = {
  token: '',
  email: '',
  logged: false,
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      const { token, email, logged, error } = action.payload;
      return {
        token,
        email,
        logged,
        error
      };
    }
    case types.logout:
      return { logged: false };

    case types.error:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default authReducer;
