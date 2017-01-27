import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section id="wrap">
        <div id="main">
        { this.props.children }
        </div>
        <Footer/>
      </section>
    )
  }
})
