import React from "react";
import { Modal } from "react-bootstrap";

const Questions = (props) => (
    <Modal className="questions-modal" show={props.showModal} onHide={props.hideModal}>
      <Modal.Header className="questions-modal-header" closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="questions-container">{props.question} </div>
        {props.answer}
      </Modal.Body>
    </Modal>
  );

export default Questions; 
