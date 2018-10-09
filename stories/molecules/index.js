import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import Paginator from './Paginator/';
import DataTable from './DataTable/';

setAddon(JSXAddon);

const stories = storiesOf('Molecules', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addWithJSX('Paginator', withReadme(...Paginator))
  .addWithJSX('DataTable', withReadme(...DataTable));
