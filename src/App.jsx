import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
export default App;
