import React from 'react';
import TextField from './TextField';

describe('TextField Component', () => {
  test('Render the TextField', () => {
    const textField = shallow(<TextField />);
    expect(textField).toMatchSnapshot();
  });

  test('Fire change on TextField', () => {
    const onChange = jest.fn();
    const textFieldWrapper = shallow(<TextField onChange={onChange} />);
    textFieldWrapper.find('input').simulate('change', () => {});
    expect(onChange.mock.calls.length).toEqual(1);
  });
});
