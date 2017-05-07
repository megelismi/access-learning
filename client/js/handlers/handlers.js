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

export default populateMonsters;
