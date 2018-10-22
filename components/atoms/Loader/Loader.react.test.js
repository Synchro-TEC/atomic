import React from 'react';
import Loader from './Loader';

describe('Loader Component', () => {
  test('Render Loader Component', () => {
    const loader = shallow(<Loader />);
    expect(loader).toMatchSnapshot();
  });
});
