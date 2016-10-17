import React from 'react'

import PlayerScoreboard from './PlayerScoreboard.jsx'
import EnterScore from './EnterScore.jsx'

export default class Scoreboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentPlayer: 'player1',
      player1: {
        playerName: 'Higgins',
        playerScore: 0,
        currentBreakTotal: 0,
        currentBreakSeq: ''
      },
      player2: {
        playerName: 'White',
        playerScore: 0,
        currentBreakTotal: 0,
        currentBreakSeq: ''
      }
    }
  }

  changeScore (score) {
    console.log('Changing score...')
    if (this.state.currentPlayer == 'player1') {
      console.log('In 1...')
      this.setState(
        {player1: {
            playerName: this.state.player1.playerName,
            playerScore: this.state.player1.playerScore + score,
            currentBreakTotal: this.state.player1.currentBreakTotal + score,
            currentBreakSeq: this.state.player1.currentBreakSeq + ' - ' + score
          }
        }
      )
    } else {
      console.log('In 2...')
      this.setState(
        {player2: {
            playerName: this.state.player2.playerName,
            playerScore: this.state.player2.playerScore + score,
            currentBreakTotal: this.state.player2.currentBreakTotal + score,
            currentBreakSeq: this.state.player2.currentBreakSeq + ' - ' + score
          }
        }
      )
    }
  }

  changePlayer () {
    if (this.state.currentPlayer == 'player1') {
      this.setState(
        {currentPlayer: 'player2',
          player2: {
            playerName: this.state.player2.playerName,
            playerScore: this.state.player2.playerScore,
            currentBreakTotal: 0,
            currentBreakSeq: ''
          }
        }
      )
    } else {
      this.setState(
        {currentPlayer: 'player1',
          player1: {
            playerName: this.state.player1.playerName,
            playerScore: this.state.player1.playerScore,
            currentBreakTotal: 0,
            currentBreakSeq: ''
          }
        }
      )
    }
  }

  render () {
    var divStyle = {color: 'orange'}

    return (
    <div style={divStyle}>
      <PlayerScoreboard
        playerName={this.state.player1.playerName}
        playerScore={this.state.player1.playerScore}
        currentBreakTotal={this.state.player1.currentBreakTotal}
        currentBreakSeq={this.state.player1.currentBreakSeq}
      />
      <PlayerScoreboard
        playerName={this.state.player2.playerName}
        playerScore={this.state.player2.playerScore}
        currentBreakTotal={this.state.player2.currentBreakTotal}
        currentBreakSeq={this.state.player2.currentBreakSeq}
      />
      <EnterScore changeScore={this.changeScore.bind(this)} changePlayer={this.changePlayer.bind(this)} />
    </div>
    )
  }
}
