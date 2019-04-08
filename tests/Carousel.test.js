import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../client/src/components/Carousel.jsx';

configure({ adapter: new Adapter() });

const photos = [
  {
    id: 1,
    url: 'www.example.com/photo',
    caption: 'Test text for testing tests',
    thumbnailUrl: 'www.example.com/thumbnail',
  },
  {
    listingId: 1,
    photoUrl: 'www.example.com/photo',
    title: 'Another testing bit of text',
    thumbnailUrl: 'www.example.com/thumbnail',
  },
];

test('Carousel should render correctly', () => {
  const output = shallow(<Carousel photos={photos} />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

test('Carousel should keep track of the current image index', () => {
  const output = shallow(<Carousel photos={photos} />);
  output.instance().setCurrentImageIndex(1);
  expect(output.state().currentImageIndex).toBe(1);
});
