import types from '../types/types';

export const setTechnologies = data => ({
  type: types.setTechs,
  payload: data
});

export const techError = error => ({
  type: types.techError,
  payload: error
});
