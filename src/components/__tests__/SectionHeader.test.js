import React from 'react';
import SectionHeader from '../SectionHeader';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<SectionHeader />);
});

it('Has correct text', () => {
    const wrapper = shallow(<SectionHeader text="Luke Chamberlain is very cool" />);
    expect(wrapper.text()).toContain("Luke Chamberlain");
});
