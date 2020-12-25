import types from '../types/types';

const userRegistry = body => ({
  type: types.createUser,
  payload: { ...body }
});

export default userRegistry;
