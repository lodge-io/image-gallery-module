import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Applet from '../client/src/components/Applet';

configure({ adapter: new Adapter() });

test('App should render correctly', () => {
  const output = shallow(<Applet />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('toggleModal should toggle isOpen', () => {
  const output = shallow(<Applet />);
  const btn = output.find('div').get(1);
  btn.props.onClick();
  expect(output.state().isOpen).toBe(true);
});
