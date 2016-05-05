import React from 'react'

export default class EnterScore extends React.Component {
  handleScoreChange (e) {
    const point = 1
    this.props.changeScore(point, 'player1')
    console.log('CLICK!')
  }

  handlePlayerChange (e) {
    this.props.changePlayer()
    console.log('CHANGE!')
  }

  render () {
    return (
    <div>
      'Enter the score here'
      <input type="button" value="add 1 point" onClick={this.handleScoreChange.bind(this)} />
      <br /> Change the player
      <input type="button" value="change player" onClick={this.handlePlayerChange.bind(this)} />
    </div>
    )
  }
}
