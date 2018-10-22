import React from 'react';
import Paginator from './Paginator';

describe('Paginator Component', () => {
  test('Render the pagginator', () => {
    const onGoToNextCallBack = jest.fn();
    const onGoToPrevCallBack = jest.fn();
    const onGoToPageCallBack = jest.fn();
    const pagginator = shallow(
      <Paginator
        total={11}
        limit={3}
        page={2}
        onGoToPage={onGoToPageCallBack}
        onGoToNext={onGoToNextCallBack}
        onGoToPrevious={onGoToPrevCallBack}
      />
    );
    expect(pagginator).toMatchSnapshot();
  });

  test('Fire onGoToNext click', () => {
    const onGoToPageCallBack = jest.fn();
    const onGoToNextCallBack = jest.fn();
    const onGoToPrevCallBack = jest.fn();
    const pager = shallow(
      <Paginator
        total={11}
        limit={3}
        onGoToPage={onGoToPageCallBack}
        onGoToNext={onGoToNextCallBack}
        onGoToPrevious={onGoToPrevCallBack}
      />
    );
    pager.find('.next').simulate('click');
    expect(onGoToNextCallBack.mock.calls.length).toEqual(1);
  });

  test('Fire onGoToPrev click', () => {
    const onGoToPageCallBack = jest.fn();
    const onGoToNextCallBack = jest.fn();
    const onGoToPrevCallBack = jest.fn();
    const pager = shallow(
      <Paginator
        total={11}
        limit={3}
        page={2}
        onGoToPage={onGoToPageCallBack}
        onGoToNext={onGoToNextCallBack}
        onGoToPrevious={onGoToPrevCallBack}
      />
    );
    pager.find('.prev').simulate('click');
    expect(onGoToPrevCallBack.mock.calls.length).toEqual(1);
  });

  test('Fire onGoToPage click', () => {
    const onGoToPageCallBack = jest.fn();
    const onGoToNextCallBack = jest.fn();
    const onGoToPrevCallBack = jest.fn();
    const pager = shallow(
      <Paginator
        total={41}
        limit={3}
        page={2}
        onGoToNext={onGoToNextCallBack}
        onGoToPrevious={onGoToPrevCallBack}
        onGoToPage={onGoToPageCallBack}
      />
    );
    pager
      .find('.goto')
      .first()
      .simulate('click', {
        target: { textContent: '2' },
      });
    expect(onGoToPageCallBack.mock.calls.length).toEqual(1);
  });
});
