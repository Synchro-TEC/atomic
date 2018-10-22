import React from 'react';
import SelectField from './SelectField';

describe('Select Component', () => {
  test('Render the select', () => {
    const select = shallow(
      <SelectField options={[{ l: 'k', v: 'v' }, { l: 'k1', v: 'v1' }]} optionValue="v" optionText="l" />
    );
    expect(select).toMatchSnapshot();
  });

  test('Fire change on Select', () => {
    const onChange = jest.fn();
    const selectWrapper = shallow(
      <SelectField
        options={[{ l: 'k', v: 'v' }, { l: 'k1', v: 'v1' }]}
        optionValue="v"
        optionText="l"
        onChange={onChange}
      />
    );
    selectWrapper.find('select').simulate('change', () => {});
    expect(onChange.mock.calls.length).toEqual(1);
  });
});
