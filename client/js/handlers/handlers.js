import React from 'react';
import MonsterLine from '../components/MonsterLine';


export const getRandomItemFromArray = array => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};


export const populateMonsters = (componentThis) => {
  let i = 1;
  const monsters = [];
  while (i <= 8) {
    let monster;
    if (i === 1) {
      monster = `../assets/images/monster${i}.jpg`;
      monsters.push(
        <MonsterLine
          key={i}
          imageSrc={monster}
          onClick={componentThis.monsterChosen.bind(componentThis, monster)}
        />
      );
    } else {
      monster = `../assets/images/monster${i}.png`;
      const classes = 'monster-image';
      monsters.push(
        <MonsterLine
          key={i}
          imageSrc={monster}
          onClick={componentThis.monsterChosen.bind(componentThis, monster)}
        />
      );
    }
    i++;
  }
  return monsters;
};
