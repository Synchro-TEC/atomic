import React from 'react';
import { State, Store } from '@sambego/storybook-state';

import readme from './README.md';
import Selector from '../../../components/molecules/Selector/index';

const store = new Store({
  page: 1,
});

const component = () => {
  return (
    <State store={store}>
      <Selector />
    </State>
  );
};

export default [readme, component];
