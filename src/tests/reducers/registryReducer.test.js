import registryReducer from '../../reducers/registryReducer';
import types from '../../types/types';

describe('Testing registryReducer', () => {
  test('should return default state', () => {
    const state = registryReducer({ user: {}, error: '' }, {});
    expect(state).toEqual({ user: {}, error: '' });
  });

  test('should return the user created', () => {
    const action = {
      type: types.createUser,
      payload: {
        name: 'Santiago',
        lastName: 'Rios',
        country: 'Colombia',
        province: 'Antioquia',
        email: 'santiago123@gmail.com',
        phone: '3015841294',
        password: 'admin1234',
        conditions: true,
        token: 'qiowAS9ndnjLKSS32LaLAPlDKL2'
      }
    };
    const state = registryReducer({ user: {}, error: '' }, action);
    expect(state).toEqual({
      user: {
        name: 'Santiago',
        lastName: 'Rios',
        country: 'Colombia',
        province: 'Antioquia',
        email: 'santiago123@gmail.com',
        phone: '3015841294',
        password: 'admin1234',
        conditions: true,
        token: 'qiowAS9ndnjLKSS32LaLAPlDKL2'
      },
      error: ''
    });
  });

  test('should return the error', () => {
    const action = {
      type: types.registryError,
      payload: 'Error creating the user'
    };
    const state = registryReducer({ user: {}, error: '' }, action);
    expect(state).toEqual({ user: {}, error: 'Error creating the user' });
  });
});
