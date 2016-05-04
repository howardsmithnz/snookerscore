import React from 'react'

import PlayerScoreboard from './PlayerScoreboard.jsx'
import EnterScore from './EnterScore.jsx'

export default class Scoreboard extends React.Component {
  render () {
    return (
    <div>
      <EnterScore />
      <PlayerScoreboard playerName='Selby' playerScore='47' />
      <PlayerScoreboard playerName='Ding' playerScore='11' />
    </div>
    )
  }
}
