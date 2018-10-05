import React from 'react';

import readme from './README.md';
import ListPage from '../../../components/templates/ListPage/ListPage';

const component = () => {
  return (
    <React.Fragment>
      <ListPage resourceUrl="https://swapi.co/api/planets/" />
      <ListPage resourceUrl="https://swapi.co/api/people/" />
    </React.Fragment>
  );
};

export default [readme, component];
