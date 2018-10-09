import React from 'react';
// import { text, boolean, object } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions';
// import { optionalSelect } from '../../../utils/optionalSelect';
import { State, Store } from '@sambego/storybook-state';
import readme from './README.md';
import DataTable from '../../../components/molecules/DataTable';

const store = new Store({
  cols: [{ label: 'Nome', accessor: 'name' }, { label: 'E-mail', accessor: 'email' }],
  data: [
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
    { name: 'Fulano', email: 'Fulano de Tal' },
  ],
});

const component = () => {
  return (
    <State store={store}>
      <DataTable cols={store.cols} data={store.data} />
    </State>
  );
};

export default [readme, component];
