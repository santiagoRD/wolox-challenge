import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../../../components/login/LoginPage';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {
    token: '',
    email: '',
    logged: false
  },
  error: ''
};
let store = mockStore(initialState);
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <LoginPage />
    </Provider>
  </MemoryRouter>
);

describe('Testing <LoginPage />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('should render <LoginPage />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
