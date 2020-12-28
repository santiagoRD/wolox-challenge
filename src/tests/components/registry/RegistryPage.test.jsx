import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import RegistryPage from '../../../components/registry/RegistryPage';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  user: {
    name: '',
    lastName: '',
    country: '',
    province: '',
    email: '',
    phone: '',
    password: '',
    conditions: false,
    token: ''
  },
  error: ''
};
let store = mockStore(initialState);
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <RegistryPage />
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
