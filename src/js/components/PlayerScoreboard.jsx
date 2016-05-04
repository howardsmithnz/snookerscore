import React from 'react'

import BreakList from './BreakList'

export default class PlayerScoreBoard extends React.Component {
  render () {
    return (
    <div>
      <h3>{this.props.playerName || 'playerName goes here'}</h3>
      <h3>{this.props.playerScore || 'playerScore goes here'}</h3>
      <BreakList />
    </div>
    )
  }
}
