import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';

describe('Testing <PrivateRoute />', () => {
  test('should render the component if the user is authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute logged component={() => <span>It works!!</span>} />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
  });

  test('should not render if the user is not authenticated', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute logged={false} component={() => <span>Should not render this.</span>} />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
