import React from "react";
import { Col } from "react-bootstrap";

const MonsterLine = (props) => {
  return (
    <Col sm={6} md={3}>
      <img className="monster-image" onClick={props.onClick} src={props.imageSrc} />
    </Col>
  )
};

export default MonsterLine;
