import React from 'react'

import BreakList from './BreakList.jsx'

export default class PlayerScoreBoard extends React.Component {
  render () {
    return (
    <div>
      <h3>Player: {this.props.playerName}</h3>
      <h3>Score: {this.props.playerScore}</h3>
      <BreakList currentBreakTotal={this.props.currentBreakTotal} currentBreakSeq={this.props.currentBreakSeq} />
    </div>
    )
  }
}
