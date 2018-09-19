import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../utils/optionalSelect';

import readme from './README.md';
import MessageBox from '../../../components/MessageBox';

const options = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

const component = () => (
  <MessageBox
    theme={optionalSelect('Theme', options, '')}
    onClose={action('close clicked')}
    title={text('Title', 'Title')}
  >
    Message
  </MessageBox>
);

export default [readme, component];
