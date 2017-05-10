import React from "react";
import { Modal } from "react-bootstrap";

const ReusableModal = (props) => (
    <Modal className="modal" show={props.showModal} onHide={props.hideModal}>
      <Modal.Header className="modal-header" closeButton />
      <Modal.Body>
        <div className="modal-body-container" style={props.customStyle}>{props.content} </div>
        {props.userInput}
      </Modal.Body>
      <Modal.Footer>


      </Modal.Footer>
    </Modal>
  );

export default ReusableModal;
