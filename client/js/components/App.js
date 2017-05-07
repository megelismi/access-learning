import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Feedback from "./Feedback";
import ReusableModal from "./reusables/ReusableModal";
import * as handlers from "../handlers/handlers";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFeedback: false,
      questionCount: 0,
      done: false,
      rightAnswer: false,
      correctFeedback: ["Great job!", "Good work!", "Keep it up!"],
      incorrectFeedback: ["Nope", "Sorry, that's incorrect", "That's wrong"],
    };
  }

  componentWillMount() {
    this.props.dispatch(actions.getAllQuestions());
  }

  openNextQuestion() {
    this.props.dispatch(actions.toggleQuestionsModal());
    this.setState({
      showFeedback: false
    });
  }

  checkAnswer(e) {
    e.preventDefault();
    const questionCount = this.state.questionCount;
    this.props.dispatch(actions.toggleQuestionsModal());
    if (this.answer.value === this.props.questions[questionCount].answer) {
      this.setState({
        rightAnswer: true
      });
    } else {
      this.setState({
        rightAnswer: false
      });
    }

    if (questionCount >= this.props.questions.length - 1) {
      this.setState({
        done: true,
        questionCount: 0,
        showFeedback: true
      });
    } else {
      this.setState({
        done: false,
        showFeedback: true,
        questionCount: questionCount + 1,
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
      const index = this.state.questionCount;
      question = this.props.questions[index].question;
    }

    const blockOrNone = this.state.showFeedback ? "block" : "none";
    const showOrNot = {
      display: blockOrNone
    };

    const answerForm = (
      <form className="answer-form" onSubmit={this.checkAnswer.bind(this)}>
        <input ref={answer => this.answer = answer} />
        <button type="submit">Submit</button>
      </form>
    );

    let feedback;
    if (this.state.done) {
      feedback = "Done!!";
    } else if (this.state.rightAnswer) {
      feedback = handlers.getRandomItemFromArray(this.state.correctFeedback);
    } else {
      feedback = handlers.getRandomItemFromArray(this.state.incorrectFeedback);
    }

    let welcomeMessage;
    if (this.props.userName) {
      welcomeMessage = `Welcome, ${this.props.userName}!`
    } else {
      welcomeMessage = "Welcome!"
    }

    return (
      <div className="app-container">
        <div className="get-started-message">
          <h1>{welcomeMessage}</h1>
          <button onClick={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}>
            Open questions
          </button>
        </div>
        <ReusableModal
          showModal={this.props.questionsModalOpen}
          hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
          content={question}
          userInput={answerForm}
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
    selectedQuestion: state.selectedQuestion,
    userName: state.userName
  });

export default connect(mapStateToProps)(App);

