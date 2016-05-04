import React from 'react'

import PlayerScoreboard from './PlayerScoreboard.jsx'
import EnterScore from './EnterScore.jsx'

export default class Scoreboard extends React.Component {
  constructor () {
    super()
    this.state = {
      playerName1: 'McManus',
      playerScore1: 0,
      playerName2: 'Hendry',
      playerScore2: 0,
    }
  }

  changeScore (score, player) {
    console.log('Changing score...')
    if (player == 'player1') {
      this.setState({playerScore1: this.state.playerScore1 + score})
    } else {
      this.setState({playerScore2: this.state.playerScore2 + score})
    }
  }

  render () {
    return (
    <div>
      <EnterScore changeScore={this.changeScore.bind(this)} />
      <PlayerScoreboard playerName={this.state.playerName1} playerScore={this.state.playerScore1} />
      <PlayerScoreboard playerName={this.state.playerName2} playerScore={this.state.playerScore2} />
    </div>
    )
  }
}
