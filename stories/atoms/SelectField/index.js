import React from 'react';
import { action } from '@storybook/addon-actions';
import readme from './README.md';
import SelectField from '../../../components/SelectField';
import { boolean, text } from '@storybook/addon-knobs';

const optionsOne = [
  { id: 1, name: 'Option A' },
  { id: 2, name: 'Option B' },
  { id: 3, name: 'Option C' },
  { id: 4, name: 'Option D' },
  { id: 5, name: 'Option E' },
];

const component = () => (
  <form className="sv-form">
    <SelectField
      label="Name"
      errorMessage={text('Name error:', '')}
      hintInfo={text('Hint:', 'Hint Info')}
      onChange={action('on change name')}
      options={optionsOne}
      optionText="name"
      optionValue="id"
      disabled={boolean('Disabled', false)}
    />
    <SelectField
      label="Name"
      optionText={d => `${d.id} - ${d.name}`}
      onChange={action('on change name')}
      options={optionsOne}
      optionValue="id"
    />
  </form>
);

export default [readme, component];
