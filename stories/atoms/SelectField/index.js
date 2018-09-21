import React from 'react';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import SelectField from '../../../components/SelectField';
import { text, boolean } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../utils/optionalSelect';

const options = {
  text: 'text',
  email: 'email',
  password: 'password',
};

const optionsOne = [
  { id: 1, name: 'Option A' },
  { id: 2, name: 'Option B' },
  { id: 3, name: 'Option C' },
  { id: 4, name: 'Option D' },
  { id: 5, name: 'Option E' },
];

const component = () => (
  <form className="sv-form">
    <Row withGutter={true}>
      <Col>
        <SelectField
          label="Name"
          errorMessage={text('Name error:', '')}
          onChange={action('on change name')}
          options={optionsOne}
          labelKey="name"
          valueKey="id"
        />
      </Col>
      {/*<Col>*/}
      {/*<SelectField label="E-mail" hintInfo={text('E-mail hint:', '')} onChange={action('on change email')} />*/}
      {/*</Col>*/}
      {/*<Col>*/}
      {/*<SelectField*/}
      {/*label="Phone"*/}
      {/*hintInfo={text('Phone hint:', '')}*/}
      {/*errorMessage={text('Phone error', '')}*/}
      {/*onChange={action('on change phone')}*/}
      {/*/>*/}
      {/*</Col>*/}
    </Row>
  </form>
);

export default [readme, component];
