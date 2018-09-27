import React from 'react';
// import { text, boolean, object } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions';
// import { optionalSelect } from '../../../utils/optionalSelect';
import { State, Store } from '@sambego/storybook-state';

import readme from './README.md';
import Paginator from '../../../components/molecules/Paginator/Paginator';
import Button from '../../../components/atoms/Button/Button';

const limit = 5;

const store = new Store({
  page: 1,
});

const component = () => {
  function navigate(pager) {
    store.set({ page: pager.currentPage });
  }
  let page = store.get('page');
  return (
    <State store={store}>
      <Paginator
        page={page}
        limit={limit}
        total={21}
        onGoToNext={pager => navigate(pager)}
        onGoToPage={pager => navigate(pager)}
        onGoToPrevious={pager => navigate(pager)}
      />
      <Button theme="info" outline small onClick={() => store.set({ page: 1 })}>
        Reset
      </Button>
    </State>
  );
};

export default [readme, component];
