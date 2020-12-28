import technologiesReducer from '../../reducers/technologiesReducer';
import types from '../../types/types';

describe('Testing technologiesReducer', () => {
  test('should return default state', () => {
    const state = technologiesReducer({ techs: [], error: '' }, {});
    expect(state).toEqual({ techs: [], error: '' });
  });

  test('should return an array with all techs', () => {
    const action = {
      type: types.setTechs,
      payload: [
        {
          tech: 'React'
        }
      ]
    };
    const state = technologiesReducer({ techs: [], error: '' }, action);
    expect(state).toEqual({
      techs: [
        {
          tech: 'React'
        }
      ],
      error: ''
    });
  });

  test('should return the error', () => {
    const action = {
      type: types.techError,
      payload: 'Hubo un error obteniendo el listado'
    };
    const state = technologiesReducer({ techs: [], error: '' }, action);
    expect(state).toEqual({ techs: [], error: 'Hubo un error obteniendo el listado' });
  });
});
