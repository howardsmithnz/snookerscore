import React from 'react'

export default class EnterScore extends React.Component {
  handleScoreChange (points) {
    console.log('CLICK!')
    return function () {
      this.props.changeScore(points)
    }.bind(this)
  }

  handlePlayerChange (e) {
    this.props.changePlayer()
    console.log('CHANGE!')
  }

  render () {
    console.log('EnterScore props are:', this.props)
    return (
    <div>
      'Enter the score here'
      <input type="button" value="1" onClick={this.handleScoreChange(1)} />
      <input type="button" value="2" onClick={this.handleScoreChange(2)} />
      <br /> Change the player
      <input type="button" value="change player" onClick={this.handlePlayerChange.bind(this)} />
    </div>
    )
  }
}
