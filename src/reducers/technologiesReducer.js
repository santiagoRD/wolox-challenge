import types from '../types/types';

const initialState = {
  techs: [],
  error: ''
};

const technologiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setTechs:
      return { ...state, techs: action.payload };

    case types.techError:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default technologiesReducer;
