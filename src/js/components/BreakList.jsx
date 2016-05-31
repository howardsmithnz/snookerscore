import React from 'react'

export default class BreakList extends React.Component {
  render () {
    return (
    <div>
      <h3>Break Total: {this.props.currentBreakTotal}</h3>
      <h3>Break Sequence: {this.props.currentBreakSeq}</h3>
    </div>
    )
  }
}
