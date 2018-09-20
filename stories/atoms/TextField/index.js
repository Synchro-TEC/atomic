import React from 'react';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import TextField from '../../../components/TextField';
import { text, boolean } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../utils/optionalSelect';

const options = {
  text: 'text',
  email: 'email',
  password: 'password',
};

const component = () => (
  <form className="sv-form">
    <Row withGutter={true}>
      <Col>
        <TextField label="Name" errorMessage={text('Name error:', '')} onChange={action('on change name')} />
      </Col>
      <Col>
        <TextField label="E-mail" hintInfo={text('E-mail hint:', '')} onChange={action('on change email')} />
      </Col>
      <Col>
        <TextField
          label="Phone"
          hintInfo={text('Phone hint:', '')}
          errorMessage={text('Phone error', '')}
          onChange={action('on change phone')}
        />
      </Col>
    </Row>
    <Row withGutter={true}>
      <Col>
        <TextField
          label="Dynamic Field"
          value="test"
          onChange={action('on change Dynamic Field')}
          type={optionalSelect('Type', options, '')}
          disabled={boolean('Disabled', false)}
        />
      </Col>
    </Row>
  </form>
);

export default [readme, component];
