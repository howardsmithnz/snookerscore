import React from 'react'

import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Scoreboard from './Scoreboard.jsx'

export default class Layout extends React.Component {
  render () {
    return (
    <div>
      <Header /> Hello! Let's score some snooker.
      <Scoreboard />
      <Footer />
    </div>
    )
  }
}
