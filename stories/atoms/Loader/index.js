import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../utils/optionalSelect';

import readme from './README.md';
import Loader from '../../../components/atoms/Loader/Loader';

const options = {
  spin: 'spin',
  bar: 'bar',
};

const component = () => <Loader type={optionalSelect('Type', options, '')} large={boolean('Large', false)} />;

export default [readme, component];
