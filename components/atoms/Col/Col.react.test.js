import React from 'react';
import Col from './Col';

describe('Col Component', () => {
  test('Render Col Component', () => {
    const col = shallow(<Col />);
    expect(col).toMatchSnapshot();
  });
});
