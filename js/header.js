import React from 'react'
import { Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="headerBackground">
        <div className="headerBranding">
          <h1 className="headerBrandingTitle">Gear Grow</h1>
          <p className="headerBrandingText">...a place to share</p>
        </div>
        <Link className="homeLink" to="/">HOME</Link>
      </section>
    )
  }
})
