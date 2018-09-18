import React from 'react';
import { text, boolean, object } from '@storybook/addon-knobs';

import readme from './README.md';
import Row from '../../../components/Row';
import Col from '../../../components/Col';

const component = () => (
  <div>
    <Row
      withGutter={boolean('withGutter', false)}
      className={text('ClassName', 'sv-bg-color--blue-50')}
      style={object('Style', {})}
    >
      <Col className="sv-bg-color--blue-300">col-1</Col>
      <Col className="sv-bg-color--blue-300">col-2</Col>
    </Row>
    <Row
      withGutter={boolean('withGutter', false)}
      className={text('ClassName', 'sv-bg-color--blue-50')}
      style={object('Style', {})}
    >
      <Col className="sv-bg-color--blue-300">col-1</Col>
      <Col className="sv-bg-color--blue-300">col-2</Col>
      <Col className="sv-bg-color--blue-300">col-3</Col>
    </Row>
    <Row withGutter={boolean('withGutter', false)} className="sv-bg-color--blue-50 sv-pa--10">
      <Col className="sv-bg-color--blue-300">col-1</Col>
      <Col className="sv-bg-color--blue-300">col-2</Col>
      <Col className="sv-bg-color--blue-300">col-3</Col>
    </Row>
  </div>
);

export default [readme, component];
