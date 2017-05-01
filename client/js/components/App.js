import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Feedback from "./Feedback";
import Questions from "./Questions"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    }
  }

  componentWillMount() {
    this.props.dispatch(actions.getAllQuestions());
  }

  openNextQuestion() {
    this.props.dispatch(actions.toggleQuestionsModal());
  }

  checkAnswer (e) {
    e.preventDefault();
    console.log(this.answer.value);
    this.props.dispatch(actions.toggleQuestionsModal());
    this.setState({
      showFeedback: true
    });
    setTimeout(this.openNextQuestion.bind(this), 3000);
  }
  render() {
    console.log('state feedback', this.state.showFeedback);
    let question; 
    if (this.props.selectedQuestion === undefined) {
      question = (
        <div />
      ); 
    } else {
      question = this.props.selectedQuestion.question;
    }

    let blockOrNone = this.state.showFeedback ? "block" : "none";
    console.log(blockOrNone);
    const showOrNot = {
      display: blockOrNone
    }

    const answerForm = (
      <form className="answer-form" onSubmit={this.checkAnswer.bind(this)}>
        <input ref={answer => this.answer = answer} />
        <button type="submit">Submit</button>
      </form>
    );

    return (
      <div className="app-container">
        <button 
        onClick={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
        >
        Open questions</button>
        <Questions 
          showModal={this.props.questionsModalOpen}
          hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
          question={question}
          answer={answerForm}
        />
        <Feedback
          showOrNot={showOrNot}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    questionsModalOpen: state.questionsModalOpen, 
    questions: state.questions, 
    selectedQuestion: state.selectedQuestion
  });

export default connect(mapStateToProps)(App);

