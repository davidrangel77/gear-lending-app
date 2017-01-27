import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section className="contentSection">
        <h1 className="pageHeadingTitle">A Short Website About D Rangel</h1>
        <div className="landingWhole">
          <h2 className="landingTitle">Jr. Developer in training; San Antonio, Tx</h2>
          <p className="landingPageWelcome">Welcome!</p>
          <p className="landingPageText">
            My name is David Rangel and I am an aspiring front-end developer currently attending the Front End Engineering course at <a href="https://www.theironyard.com/">The Ironyard</a> in San Antonio, Tx.<br/><br/>
            I have had many careers and experiences, but I believe I am on the path to the most successful time in my professional life.<br/><br/>
        Please use the buttons below to navigate through these pages. </p>
        </div>
      </section>
    )
  }
})
