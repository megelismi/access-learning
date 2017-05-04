import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import MonsterLine from "./MonsterLine";

class WelcomePage extends Component {

  monsterChosen(monster) {
    console.log(`this monster was chosen ${monster}`);
  }

  render () {

  const populateMonsters = () => {
    let i = 1;
    let monsters = [];
    while (i <= 8) {
      let monster;
      if (i === 1) {
        monster = `../assets/images/monster${i}.jpg`
        monsters.push(
          <MonsterLine
            key={i}
            imageSrc={monster}
            onClick={this.monsterChosen.bind(this, monster)}
          />
        )
      }
      else {
        monster = `../assets/images/monster${i}.png`;
        monsters.push(
          <MonsterLine
            key={i}
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
  console.log(monsters);

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
