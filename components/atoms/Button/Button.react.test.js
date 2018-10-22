import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  test('Render the button', () => {
    const wrapper = shallow(<Button>The Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Fire onClick button', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack}>The Button</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
