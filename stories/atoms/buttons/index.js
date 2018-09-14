import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';
// import { optionalSelect } from '../../../components/utils/optionalSelect';

import readme from '../buttons/README.md';
import Button from '../../../components/Button';

const options = {
  theme: 'inverse',
};

const component = () => <Button theme={text('Theme', '')}>TESTE</Button>;

export default [readme, component];
// import React from 'react';
// import { setAddon, storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { withNotes } from '@storybook/addon-notes';
// import JSXAddon from 'storybook-addon-jsx';
// import infoAddon from '@kadira/react-storybook-addon-info';

// import Button from '../components/Button';

// setAddon(JSXAddon, infoAddon);

// const Test = ({
//   fontSize = '16px',
//   fontFamily = 'Arial',
//   align = 'left',
//   color = 'red',
//   children,
// }) => (
//   <div style={{ color, fontFamily, fontSize, textAlign: align }}>
//     {children}
//   </div>
// );

// storiesOf('test', module)
//   .addWithJSX('Paris', () => (
//     <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
//       Hello
//     </Test>
//   ))
//   .addWithJSX('Orleans', () => (
//     <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
//       Hello
//     </Test>
//   ));

// storiesOf('test 2', module).addWithJSX('Paris', () => (
//   <div color="#333">test</div>
// ));

// storiesOf('Button', module)
//   .add(
//     'with text',
//     withNotes('A very simple component')(() => (
//       <Button onClick={action('clickedasdasd asdasdasdas')}>Hello</Button>
//     ))
//   )
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
