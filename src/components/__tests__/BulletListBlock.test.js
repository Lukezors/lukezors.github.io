import React from 'react';
import BulletListBlock from '../BulletListBlock';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<BulletListBlock />);
});