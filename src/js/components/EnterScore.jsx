import React from 'react'

export default class EnterScore extends React.Component {
  handleChange (e) {
    const point = 1
    this.props.changeScore(point, 'player1')
    console.log('CLICK!')
  }

  render () {
    return (
    <div>
      'Enter the score here'
      <input type="button" value="push" onClick={this.handleChange.bind(this)} />
    </div>
    )
  }
}
