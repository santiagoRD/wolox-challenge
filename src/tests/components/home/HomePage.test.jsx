import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../components/home/HomePage';

describe('Testing <HomePage />', () => {
  test('should render <HomePage />', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
