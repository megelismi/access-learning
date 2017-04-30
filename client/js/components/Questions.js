import React from "react";
import { Modal } from "react-bootstrap";

const Questions = (props) => (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header className="questions-modal-header" closeButton>
        <Modal.Title>Getting Started</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Hey hey hey!
      </Modal.Body>
      <Modal.Footer className="questions-modal-footer" />
    </Modal>

  );

export default Questions; 


 // <Modal show={props.showModal} onHide={props.hideModal}>
 //          <Modal.Header closeButton>
 //            <Modal.Title>Modal heading</Modal.Title>
 //          </Modal.Header>
 //          <Modal.Body>
 //            test 
 //          </Modal.Body>
 //          <Modal.Footer />
 //        </Modal>;


  <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header className="questions-modal-header" closeButton>
        <Modal.Title>Getting Started</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Hey hey hey!
      </Modal.Body>
      <Modal.Footer className="questions-modal-footer" />
    </Modal>
