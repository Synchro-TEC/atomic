import React from 'react';
import DataTable from './index';

describe('DataTable Component', () => {
  test('Render DataTable Component', () => {
    const datatable = shallow(<DataTable cols={[]} data={[]} />);
    expect(datatable).toMatchSnapshot();
  });
});
