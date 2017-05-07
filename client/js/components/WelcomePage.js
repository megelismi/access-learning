import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row } from "react-bootstrap";
import MonsterLine from "./MonsterLine";
import ReusableModal from "./reusables/ReusableModal";
import * as actions from "../actions/actions";
import * as handlers from "../handlers/handlers";

class WelcomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsterChosen: {}
    };
  }

  monsterChosen(monster) {
    this.setState({
      monsterChosen: {
        [monster]: true,
      },
      theMonster: [monster]
    });
  this.props.dispatch(actions.toggleGettingStartedModal());
  }

  startGame(e) {
    e.preventDefault();
    console.log(`starting game, user name is ${this.answer.value}`);
  }

  render() {
  console.log(this.state);
  const populateMonsters = () => {
    let i = 1;
    const monsters = [];
    while (i <= 8) {
      let monster;
      if (i === 1) {
        monster = `../assets/images/monster${i}.jpg`;
        const classes =
        this.state.monsterChosen[monster] ?
        "monster-image monster-animated" :
        "monster-image";
        monsters.push(
          <MonsterLine
            key={i}
            class={classes}
            imageSrc={monster}
            onClick={this.monsterChosen.bind(this, monster)}
          />
        );
      } else {
        monster = `../assets/images/monster${i}.png`;
        const classes =
        this.state.monsterChosen[monster] ?
        "monster-image monster-animated" :
        "monster-image";
        monsters.push(
          <MonsterLine
            key={i}
            class={classes}
            imageSrc={monster}
            onClick={this.monsterChosen.bind(this, monster)}
          />
        );
      }
      i++;
    }
  return monsters;
};

  const answerForm = (
    <form className="answer-form" onSubmit={this.startGame.bind(this)}>
      <input ref={answer => this.answer = answer} />
      <button type="submit">Submit</button>
    </form>
  );

  const monsters = populateMonsters();
    return (
      <div className="welcome-page-container">
        {this.props.gettingStartedModal ?
          <ReusableModal
            showModal={this.props.gettingStartedModal}
            hideModal={() => { this.props.dispatch(actions.toggleGettingStartedModal()); }}
            content="Great! Now entered your name below"
            userInput={answerForm}
          /> :
          null}
        <p>Welcome! Choose your monster to get started.</p>
          <Grid>
            <Row className="show-grid">
              {monsters}
            </Row>
          </Grid>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
    gettingStartedModal: state.gettingStartedModal
  });

export default connect(mapStateToProps)(WelcomePage);

