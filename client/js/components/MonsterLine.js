import React from 'react';
import { Col } from 'react-bootstrap';

const MonsterLine = (props) => (
    <Col sm={6} md={3}>
      <img className="welcome-monster-image"
        role='presentation'
        style={props.style}
        onClick={props.onClick}
        src={props.imageSrc}
      />
    </Col>
  );

export default MonsterLine;
