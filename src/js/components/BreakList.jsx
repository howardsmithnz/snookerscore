import React from 'react'

export default class BreakList extends React.Component {
  render () {
    var divStyle = { background: 'green'}
    return (
    <div style={divStyle}>
      <h3>Break Total: {this.props.currentBreakTotal}</h3>
      <h3>Break Sequence: {this.props.currentBreakSeq}</h3>
    </div>
    )
  }
}
