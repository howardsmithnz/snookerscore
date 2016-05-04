import React from 'react'

import BreakList from './BreakList.jsx'

export default class PlayerScoreBoard extends React.Component {
  render () {
    return (
    <div>
      <h3>{this.props.playerName}</h3>
      <h3>{this.props.playerScore}</h3>
      <BreakList />
    </div>
    )
  }
}
