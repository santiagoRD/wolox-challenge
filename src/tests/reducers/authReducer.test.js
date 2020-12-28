import authReducer from '../../reducers/authReducer';
import types from '../../types/types';

describe('Testing authReducer', () => {
  test('should return default state', () => {
    const state = authReducer({ user: { token: '', email: '', logged: false }, error: '' }, {});
    expect(state).toEqual({ user: { token: '', email: '', logged: false }, error: '' });
  });

  test('should auth and set user info and put logged in true', () => {
    const action = {
      type: types.login,
      payload: {
        token: 'qiowAS9ndnjLKSS32LaLAPlDKL2',
        email: 'test@gmail.com',
        logged: true
      }
    };
    const state = authReducer({ user: { token: '', email: '', logged: false }, error: '' }, action);
    expect(state).toEqual({ user: { token: 'qiowAS9ndnjLKSS32LaLAPlDKL2', email: 'test@gmail.com', logged: true }, error: '' });
  });

  test('should delete user info and put logged in false', () => {
    const action = {
      type: types.logout
    };
    const state = authReducer({ user: { logged: true }, error: '' }, action);
    expect(state).toEqual({ user: { logged: false }, error: '' });
  });

  test('should put the error', () => {
    const action = {
      type: types.authError,
      payload: 'Error en el login'
    };
    const state = authReducer({ user: { token: '', email: '', logged: false }, error: '' }, action);
    expect(state).toEqual({ user: { token: '', email: '', logged: false }, error: 'Error en el login' });
  });
});
