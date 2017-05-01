import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Feedback from "./Feedback";
import Questions from "./Questions"; 

const getRandomItemFromArray = array => {
  const index = Math.floor(Math.random() * array.length);
  return array[index]; 
}; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      showFeedback: false, 
      questionCount: 0, 
      done: false, 
      rightAnswer: false, 
      correctFeedback: ["Great job!", "Good work!", "Keep it up!"], 
      incorrectFeedback:["Nope", "Sorry, that's incorrect", "That's wrong"]
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
    if (this.answer.value === this.props.questions[questionCount].answer) {
      this.setState({
        rightAnswer: true
      });
    } 
    else {
      this.setState({
        rightAnswer: false
      });
    }
  
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
    const showOrNot = {
      display: blockOrNone
    }

    const answerForm = (
      <form className="answer-form" onSubmit={this.checkAnswer.bind(this)}>
        <input ref={answer => this.answer = answer} />
        <button type="submit">Submit</button>
      </form>
    );

    let feedback; 
    if (this.state.done) {
      feedback = "Done!!"
    }
    else if (this.state.rightAnswer) {
      feedback = getRandomItemFromArray(this.state.correctFeedback);
    } 
    else {
      feedback = getRandomItemFromArray(this.state.incorrectFeedback);
    }

    return (
      <div className="app-container">
        <button onClick={() => {this.props.dispatch(actions.toggleQuestionsModal())}}>
          Open questions
        </button>
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

