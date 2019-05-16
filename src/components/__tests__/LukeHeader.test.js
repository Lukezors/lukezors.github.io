import React from 'react';
import LukeHeader from '../LukeHeader';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<LukeHeader />);
});

it('Has correct text', () => {
    const wrapper = shallow(<LukeHeader />);
    expect(wrapper.text()).toContain("Luke Chamberlain");
});
