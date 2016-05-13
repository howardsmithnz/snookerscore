import React from 'react'

export default class BreakList extends React.Component {
  render () {
    return (
    <h3>Break: {this.props.currentBreak}</h3>
    )
  }
}
