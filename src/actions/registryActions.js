import types from '../types/types';

export const userRegistry = body => ({
  type: types.createUser,
  payload: { ...body }
});

export const registryError = error => ({
  type: types.registryError,
  payload: error
});
