import React from 'react'

import PlayerScoreboard from './PlayerScoreboard.jsx'
import EnterScore from './EnterScore.jsx'

export default class Scoreboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentPlayer: 'player1',
      player1: {
        playerName: 'Smith',
        playerScore: 10,
      },
      player2: {
        playerName: 'Brown',
        playerScore: 3,
      }
    }
  }

  changeScore (score, player) {
    console.log('Changing score...')
    if (player == 'player1') {
      console.log('In 1...')
      this.setState({player1: {playerName: this.state.player1.playerName, playerScore: this.state.player1.playerScore + score}})
    } else {
      console.log('In 2...')
      this.setState({playerScore2: this.state.player2.playerScore + score})
    }
  }

  changePlayer () {
    if (this.state.currentPlayer == 'player1') {
      this.setState({currentPlayer: 'player2'})
    } else {
      this.setState({currentPlayer: 'player1'})
    }
  }

  render () {
    return (
    <div>
      <EnterScore changeScore={this.changeScore.bind(this)} changePlayer={this.changePlayer.bind(this)} />
      <PlayerScoreboard playerName={this.state.player1.playerName} playerScore={this.state.player1.playerScore} />
      <PlayerScoreboard playerName={this.state.player2.playerName} playerScore={this.state.player2.playerScore} />
    </div>
    )
  }
}
