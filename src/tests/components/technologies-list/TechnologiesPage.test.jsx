import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import TechnologiesPage from '../../../components/technologies-list/TechnologiesPage';

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  techs: [],
  error: ''
};
let store = mockStore(initialState);
const wrapper = mount(
  <MemoryRouter>
    <Provider store={store}>
      <TechnologiesPage />
    </Provider>
  </MemoryRouter>
);

describe('Testing <TechnologiesPage />', () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });
  test('should render <TechnologiesPage />', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
