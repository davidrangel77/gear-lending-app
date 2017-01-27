import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  render() {
    return (
      <section>
        <h1 className="pageHeadingTitle">Past and Current Projects</h1>
        <div className="projectsWhole">
          <div>
          <h2>Ironyard Class Assignments</h2>
          <ul className="projectsList">
            <li className="projectsName"><a href="https://github.com/davidrangel77/assignments/tree/master/5.3-gift-react" target="_blank"> Refactoring our "gift buying list" assignment in React </a></li>
            <li className="projectsName"><a href="https://github.com/davidrangel77/assignments/tree/master/4.3-refactor-calculator" target="_blank"> Refactoring our "Calculator" assignment using jQuery</a></li>
            <li className="projectsName"><a href="https://github.com/davidrangel77/assignments" target="_blank"> Repository for most of our week 1-5 assignments
            </a></li>
            <li className="projectsName"><a href="https://github.com/davidrangel77/all-things-spurs" target="_blank"> Our group project for week 6
            </a>   (click  <a href="https://tiy-groupproject-drangel.herokuapp.com/" target="_blank" className="italic"> here
            </a> for live demo)</li>
          </ul>
          </div>
        </div>
      </section>
    )
  }
})
