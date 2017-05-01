import React from "react";
import { Modal } from "react-bootstrap";

const Questions = (props) => (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header className="questions-modal-header" closeButton>
        <Modal.Title>Getting Started</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="questions-container">{props.question} </div>
        {props.answer}
      </Modal.Body>
      <Modal.Footer className="questions-modal-footer" />
    </Modal>
  );

export default Questions; 
