import React from 'react';
import MessageBox from './MessageBox';

describe('MessageBox Component', () => {
  test('Render MessageBox', () => {
    const wrapper = shallow(<MessageBox>My MessageBox</MessageBox>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Fire onClose Event', () => {
    const mockCallBack = jest.fn();
    const closeButton = shallow(<MessageBox onClose={mockCallBack}>My MessageBox</MessageBox>);
    closeButton.find('button.sv-messagebox__close').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
