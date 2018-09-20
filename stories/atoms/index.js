import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button/';
import LinkButton from './LinkButton/';
import Row from './Row/';
import Loader from './Loader/';
import Tag from './Tag/';
import MessageBox from './MessageBox/';
import TextField from './TextField/';

const stories = storiesOf('Atoms', module);

const storyWrapper = story => {
  return <div style={{ margin: '35px' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Button', withReadme(...Button))
  .add('Link Button', withReadme(...LinkButton))
  .add('Grid System', withReadme(...Row))
  .add('Loader', withReadme(...Loader))
  .add('Tag', withReadme(...Tag))
  .add('MessageBox', withReadme(...MessageBox))
  .add('TextField', withReadme(...TextField));
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
