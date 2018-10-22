import React from 'react';
import Row from './Row';

describe('Row Component', () => {
  test('Render Row Component', () => {
    const row = shallow(<Row />);
    expect(row).toMatchSnapshot();
  });
});
