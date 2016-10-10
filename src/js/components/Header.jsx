import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Snooker Score</h1>
          <p> { this.props.message } </p>
      </div>
    )
  }
}
