import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Feedback from "./Feedback";
import Questions from "./Questions"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      showFeedback: false, 
      questionCount: 0, 
      done: false
    }
  }

  componentWillMount() {
    this.props.dispatch(actions.getAllQuestions());
  }

  componentDidMount() {
    this.props.dispatch(actions.toggleQuestionsModal())
  }

  openNextQuestion() {
    this.props.dispatch(actions.toggleQuestionsModal());
  }

  checkAnswer (e) {
    e.preventDefault();
    const questionCount = this.state.questionCount;
    this.props.dispatch(actions.toggleQuestionsModal());
    if (questionCount >= this.props.questions.length-1) {
      this.setState({
        done: true,
        questionCount: 0,
        showFeedback: true
      });
    } 
    else {
      this.setState({
        done: false,
        showFeedback: true, 
        questionCount: questionCount+1, 
      });
      setTimeout(this.openNextQuestion.bind(this), 3000);
    }
  }

  wrapUpSession() {
    console.log("state", this.state);
    console.log("questions length", this.props.questions.length)
    console.log('wrappin it up');
  }

  render() {

    let question; 
    if (this.props.selectedQuestion === undefined) {
      question = (
        <div />
      ); 
    } else {
      let index = this.state.questionCount;
      question = this.props.questions[index].question;
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

    let feedback = this.state.done ? "Done!!" : "Great job!";

    return (
      <div className="app-container">
        <Questions 
          showModal={this.props.questionsModalOpen}
          hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
          question={question}
          answer={answerForm}
        />
        <Feedback
          showOrNot={showOrNot}
          text={feedback}
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

