import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class Layout extends React.Component {
  render () {
    return (
      <div>
      <Header />
        Hello! Let's score some snooker.
      <Footer />
      </div>
    )
  }
}
