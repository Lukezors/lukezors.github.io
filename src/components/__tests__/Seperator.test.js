import React from 'react';
import Seperator from '../Seperator';
import { shallow, mount } from 'enzyme';


it('Has correct text', () => {
    const wrapper = shallow(<Seperator />);
    console.log(wrapper.debug());
    expect(wrapper.find('a')).toHaveLength(0);  
    expect(wrapper.find('div')).toHaveLength(1); 
});
