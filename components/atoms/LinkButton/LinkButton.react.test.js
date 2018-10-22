import React from 'react';
import LinkButton from './LinkButton';

describe('LinkButton Button Component', () => {
  test('Render the button', () => {
    const wrapper = shallow(<LinkButton>The Button</LinkButton>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Fire onClick button', () => {
    const mockCallBack = jest.fn();
    const linkButton = shallow(<LinkButton onClick={mockCallBack}>The Button</LinkButton>);
    linkButton.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
