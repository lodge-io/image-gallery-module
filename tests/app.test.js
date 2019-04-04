import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/index';

test('renders without crashing', () => {
  if (typeof window !== 'undefined') {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

  }


});

test('does something else', () => {

});


test('does something else too', () => {
  
});