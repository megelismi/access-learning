import React, { Component } from "react";
import classnames from "classnames";
import { Grid, Row } from "react-bootstrap";
import MonsterLine from "./MonsterLine";

class WelcomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsterChosen: {}
    }
  }

  monsterChosen(monster) {
    this.setState({
      monsterChosen: {
        [monster]: true
      }
    });
    console.log(`this monster was chosen ${monster}`);
  }

  render () {
  console.log(this.state.monsterChosen)
  const populateMonsters = () => {
    let i = 1;
    let monsters = [];
    while (i <= 8) {
      let monster;
      if (i === 1) {
        monster = `../assets/images/monster${i}.jpg`
        let classes = this.state.monsterChosen[monster] ? "monster-image monster-animated" : "monster-image";
        monsters.push(
          <MonsterLine
            key={i}
            class={classes}
            imageSrc={monster}
            onClick={this.monsterChosen.bind(this, monster)}
          />
        )
      }
      else {
        monster = `../assets/images/monster${i}.png`;
        let classes = this.state.monsterChosen[monster] ? "monster-image monster-animated" : "monster-image";
        monsters.push(
          <MonsterLine
            key={i}
            class={classes}
            imageSrc={monster}
            onClick={this.monsterChosen.bind(this, monster)}
          />
        )
      }
      i++;
    }
  return monsters;
}

  let monsters = populateMonsters();
    return (
      <div className="welcome-page-container">
        <p>Welcome! Choose your monster to get started.</p>
          <Grid>
            <Row className="show-grid">
              {monsters}
            </Row>
          </Grid>
      </div>
    );
  }
};

export default WelcomePage;
