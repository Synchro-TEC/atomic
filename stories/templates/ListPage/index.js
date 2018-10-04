import React from 'react';

import readme from './README.md';
import ListPage from '../../../components/templates/ListPage/ListPage';

const component = () => {
  return <ListPage resourceUrl="http://localhost:9002/people" />;
};

export default [readme, component];
