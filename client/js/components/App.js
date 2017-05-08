import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Feedback from "./Feedback";
import ReusableModal from "./reusables/ReusableModal";
import GetStartedMessage from "./GetStartedMessage";
import * as handlers from "../handlers/handlers";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFeedback: false,
      questionCount: 0,
      done: false,
      rightAnswer: false,
      correctAnswer: null,
      monsterSize: 100,
      correctFeedback: [
        "Woo! Look at him grow!", "He's going to be ginormous!", "You got it!",
        "You really know your stuff.", "Amazing!", "Nice work", "That's right!"
        ],
      gameStarted: false
    };
  }

  componentWillMount() {
    this.props.dispatch(actions.getAllQuestions());
  }

  openNextQuestion() {
    const questionCount = this.state.questionCount;
    this.props.dispatch(actions.toggleQuestionsModal());
    this.setState({
      showFeedback: false,
      correctAnswer: this.props.questions[questionCount].answer
    });
  }

  checkAnswer(e) {
    e.preventDefault();
    const questionCount = this.state.questionCount;
    this.props.dispatch(actions.toggleQuestionsModal());
    if (this.answer.value === this.props.questions[questionCount].answer) {
      this.setState({
        rightAnswer: true,
        monsterSize: this.state.monsterSize + 50
      });
    } else {
      this.setState({
        rightAnswer: false,
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
        questionCount: questionCount + 1
      });
      setTimeout(this.openNextQuestion.bind(this), 2000);
    }
  }

  startGame() {
    this.setState({
      gameStarted: true
    });
    this.props.dispatch(actions.toggleQuestionsModal());
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
      feedback = `Sorry, the correct answer is ${this.state.correctAnswer}`
    }

    let welcomeMessage;
    if (this.props.userName) {
      welcomeMessage = `Welcome, ${this.props.userName}!`
    } else {
      welcomeMessage = "Welcome!"
    }
    let monsterImg;
    if (this.props.monster) {
      monsterImg =
        <img
          className="game-monster-image"
          role="presentation"
          src={this.props.monster}
          style={{
            width:`${this.state.monsterSize}px`
          }}
        />
    } else {
      monsterImg = <div />
    }

    let message;
    if (!this.state.gameStarted) {
      message =
       <GetStartedMessage
          welcomeMessage={welcomeMessage}
          getStarted={this.startGame.bind(this)}
        />
    } else {
     <div />
    }
    console.log(this.state);
    return (
      <div className="app-container">
        {message}
        <Feedback
          showOrNot={showOrNot}
          content={feedback}
        />
        <ReusableModal
          showModal={this.props.questionsModalOpen}
          hideModal={() => { this.props.dispatch(actions.toggleQuestionsModal()); }}
          content={question}
          userInput={answerForm}
        />
        {monsterImg}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    questionsModalOpen: state.questionsModalOpen,
    questions: state.questions,
    selectedQuestion: state.selectedQuestion,
    userName: state.userName,
    monster: state.monster
  });

export default connect(mapStateToProps)(App);

