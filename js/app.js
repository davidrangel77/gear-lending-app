import React from 'react'
import Footer from './footer'
import Header from './header'

export default React.createClass({
  render() {
    return (
      <section id="wrap">
        <div id="main">
          <Header/>
          { this.props.children }
        </div>
        <Footer/>
      </section>
    )
  }
})
