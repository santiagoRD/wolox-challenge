import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import notificationReducer from '../reducers/notificationReducer';
import registryReducer from '../reducers/registryReducer';
import technologiesReducer from '../reducers/technologiesReducer';

const reducers = combineReducers({
  auth: authReducer,
  registry: registryReducer,
  notification: notificationReducer,
  technologies: technologiesReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
