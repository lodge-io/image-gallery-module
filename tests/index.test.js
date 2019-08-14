import React from 'react';
import { shallow, render, mount } from 'enzyme';
// import sinon from 'sinon';

import Applet from '../client/src/components/Applet';
import Carousel from '../client/src/components/Carousel';
import Save from '../client/src/components/Save';
import Share from '../client/src/components/Share'

const setup = () => {
  const wrapper = shallow(<Carousel />);
  return { wrapper };
};

test('renders 1 <Module /> components', () => {
  const wrapper = mount(<Carousel />);
  expect(wrapper.find('Carousel')).to.have.lengthOf(1);
});
