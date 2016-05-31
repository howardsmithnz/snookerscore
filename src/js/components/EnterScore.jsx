import React from 'react'

export default class EnterScore extends React.Component {
  handleScoreChange (points) {
    // console.log('CLICK!')
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
    const buttonStyles = {
      borderRadius: '50%'
    }
    return (
    <div>
      'Enter the score here'
      <input
        type="button"
        style={buttonStyles}
        value="1"
        onClick={this.handleScoreChange(1)} />
      <input
        type="button"
        style={buttonStyles}
        value="2"
        onClick={this.handleScoreChange(2)} />
      <input
        type="button"
        style={buttonStyles}
        value="3"
        onClick={this.handleScoreChange(3)} />
      <input
        type="button"
        style={buttonStyles}
        value="4"
        onClick={this.handleScoreChange(4)} />
      <input
        type="button"
        style={buttonStyles}
        value="5"
        onClick={this.handleScoreChange(5)} />
      <input
        type="button"
        style={buttonStyles}
        value="6"
        onClick={this.handleScoreChange(6)} />
      <input
        type="button"
        style={buttonStyles}
        value="7"
        onClick={this.handleScoreChange(7)} />
      <br /> Change the player
      <input type="button" value="change player" onClick={this.handlePlayerChange.bind(this)} />
    </div>
    )
  }
}
