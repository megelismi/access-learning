import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
// import Questions from "./Questions"; 
import { Modal } from "react-bootstrap";

class App extends Component {

  render() {
    return (
      <div className="app-container">
      <button 
      onClick={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
      >
      Open questions</button>
        <Modal show={this.props.questionsModalOpen} onHide={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}>
      <Modal.Header className="questions-modal-header" closeButton>
        <Modal.Title>Getting Started</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Hey hey hey!
      </Modal.Body>
      <Modal.Footer className="questions-modal-footer" />
    </Modal>
      </div>
    ); 
  }
}

const mapStateToProps = state => ({
    questionsModalOpen: state.questionsModalOpen
  });

export default connect(mapStateToProps)(App);

  // <Questions 
  //         showModal={this.props.questionsModalOpen}
  //         hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
  //       />
