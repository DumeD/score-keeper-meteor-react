import React from 'react';

import { Players } from '../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let playerName = e.target.playerName.value;

    let players = Players.find().fetch();

    let nameDoesExist = false;

    let names = players.map((p) => {

      p.name = p.name.toLowerCase();

      playerName = playerName.toLowerCase();

      if(playerName === p.name) {
        alert('Player already exists.');
        e.target.playerName.value = '';
        nameDoesExist = true;
        return;
      }
    });

    if(playerName && !nameDoesExist) {
      e.target.playerName.value = '';

      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className='item'>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <input className='form__input' type='text' name='playerName' placeholder='Insert Player Name' />
          <button className='button'>Add Player</button>
        </form>
      </div>
    );
  }
}
