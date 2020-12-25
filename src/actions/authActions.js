import types from '../types/types';

export const userAuthentication = (token, email, logged, error) => ({
  type: types.login,
  payload: {
    token,
    email,
    logged,
    error
  }
});

export const userLogout = () => ({
  type: types.logout,
  payload: {}
});

export const authError = error => ({
  type: types.error,
  payload: { error }
});
