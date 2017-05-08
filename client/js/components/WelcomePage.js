import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import MonsterLine from "./MonsterLine";
import ReusableModal from "./reusables/ReusableModal";
import * as actions from "../actions/actions";
import * as handlers from "../handlers/handlers";

class WelcomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsterChosen: {},
      redirectTo: null
    };
  }

  componentWillMount () {
    this.setState({
      userName: this.props.userName
    })
  }

  monsterChosen(monster) {
    this.setState({
      theMonster: [monster]
    });
  this.props.dispatch(actions.toggleGettingStartedModal());
  }

  startGame(e) {
    e.preventDefault();
    console.log('MONSTER', this.state.theMonster);
    this.props.dispatch(actions.saveUserDetails(this.answer.value, this.state.theMonster));
    this.setState({
      redirectTo: "/game"
    })
  }

  render() {

    const answerForm = (
      <form className="answer-form" onSubmit={this.startGame.bind(this)}>
        <input ref={answer => this.answer = answer} />
        <button type="submit">Submit</button>
      </form>
    );

    const monsters = handlers.populateMonsters(this);
    if (this.state.redirectTo) {
      return (
        <div>
          <Redirect to={{ pathname: this.state.redirectTo }} />
        </div>
      )
    } else {
      return (
        <div className="welcome-page-container">
          {this.props.gettingStartedModal ?
            <ReusableModal
              showModal={this.props.gettingStartedModal}
              hideModal={() => { this.props.dispatch(actions.toggleGettingStartedModal()); }}
              content="Great! Now enter your name below"
              userInput={answerForm}
            /> :
            null}
          <p>Welcome! Choose your monster to get started.</p>
            <Grid>
              <Row className="show-grid">
                {monsters}
              </Row>
            </Grid>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
    gettingStartedModal: state.gettingStartedModal
  });

export default connect(mapStateToProps)(WelcomePage);

