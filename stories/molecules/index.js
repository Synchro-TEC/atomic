import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

import Paginator from './Paginator/';

const stories = storiesOf('Molecules', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  // .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addWithJSX('Paginator', withReadme(...Paginator));
// .add('ButtonGroup', withReadme(...ButtonGroup))
// .add('CircularThumbnail', withReadme(...CircularThumbnail))
// .add('FormGroupLabel', withReadme(...FormGroupLabel))
// .add('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
// .add('LoadingDots', withReadme(...LoadingDots))
// .add('NumberCircle', withReadme(...NumberCircle))
// .add('Select', withReadme(...Select))
// .add('Paginator', withReadme(...Paginator))
// .add('TextArea', withReadme(...TextArea))
// .add('TextInput', withReadme(...TextInput))
// .add('Tooltip', withReadme(...Tooltip))
// .add('Trend', withReadme(...Trend));
