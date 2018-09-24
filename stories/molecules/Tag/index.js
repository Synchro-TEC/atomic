import React from 'react';
// import { text, boolean, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../utils/optionalSelect';

import readme from './README.md';
import Tag from '../../../components/Tag';

const options = {
  default: 'default',
  primary: 'primary',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};

const component = () => (
  <Tag theme={optionalSelect('Theme', options, '')} onClose={action('close clicked')}>
    tagname
  </Tag>
);

export default [readme, component];
