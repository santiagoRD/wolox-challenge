import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import registryReducer from '../reducers/registryReducer';

const reducers = combineReducers({
  auth: authReducer,
  registry: registryReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
