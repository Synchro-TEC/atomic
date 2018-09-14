import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './buttons/';
const stories = storiesOf('Atoms', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
  // .add('ButtonGroup', withReadme(...ButtonGroup))
  // .add('CircularThumbnail', withReadme(...CircularThumbnail))
  // .add('FormGroupLabel', withReadme(...FormGroupLabel))
  // .add('FormGroupTextHelp', withReadme(...FormGroupTextHelp))
  // .add('LoadingDots', withReadme(...LoadingDots))
  // .add('NumberCircle', withReadme(...NumberCircle))
  // .add('Select', withReadme(...Select))
  // .add('Tag', withReadme(...Tag))
  // .add('TextArea', withReadme(...TextArea))
  // .add('TextInput', withReadme(...TextInput))
  // .add('Tooltip', withReadme(...Tooltip))
  // .add('Trend', withReadme(...Trend));