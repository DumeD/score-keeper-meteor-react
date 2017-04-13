import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((p, index) => {
    if(index !== 0 && players[index - 1].score > p.score) {
      rank++;
    }

    return {
      ...p,
      rank,
      position: numeral(rank).format('0o')
    };
  });
};
