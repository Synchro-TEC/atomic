import React from 'react';
import Tag from './Tag';

describe('Tag Component', () => {
  test('Render the button', () => {
    const tag = shallow(<Tag>The Tag</Tag>);
    expect(tag).toMatchSnapshot();
  });

  test('Fire onClick button', () => {
    const mockCallBack = jest.fn();
    const tag = shallow(<Tag onClose={mockCallBack}>The Tag</Tag>);
    tag.find('.sv-tag__close').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
