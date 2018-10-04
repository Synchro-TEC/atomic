import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

import ListPage from './ListPage/';

const stories = storiesOf('Templates', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addWithJSX('List Page', withReadme(...ListPage));
