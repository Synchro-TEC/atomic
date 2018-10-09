import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
import ListPage from './ListPage/';

setAddon(JSXAddon);

const stories = storiesOf('Organisms', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addWithJSX('List Page', withReadme(...ListPage));
