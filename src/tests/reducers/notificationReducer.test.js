import notificationReducer from '../../reducers/notificationReducer';
import types from '../../types/types';

describe('Testing notificationReducer', () => {
  test('should return default state', () => {
    const state = notificationReducer({ show: false, message: '' }, {});
    expect(state).toEqual({ show: false, message: '' });
  });
  test('should return show in true', () => {
    const action = {
      type: types.toggle,
      payload: {
        show: true,
        message: 'Show modal'
      }
    };
    const state = notificationReducer({ show: false, message: '' }, action);
    expect(state).toEqual({ show: true, message: 'Show modal' });
  });

  test('should return show in false', () => {
    const action = {
      type: types.toggle,
      payload: {
        show: false,
        message: ''
      }
    };
    const state = notificationReducer({ show: false, message: '' }, action);
    expect(state).toEqual({ show: false, message: '' });
  });
});
