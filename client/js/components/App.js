import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Questions from "./Questions"; 

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <button 
        onClick={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
        >
        Open questions</button>
        <Questions 
          showModal={this.props.questionsModalOpen}
          hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    questionsModalOpen: state.questionsModalOpen
  });

export default connect(mapStateToProps)(App);

