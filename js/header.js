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
        <div>
          <img className="nav__currentUserImage" src={this.props.user.picture} />
          <button className="nav__signIn"
              onClick={this.props.signUserIn}
              data-js="nav__signIn"> Log In </button>
          <button className="nav__signOut--hide"
              onClick={this.props.signUserOut}
              data-js="nav__signOut"> Log Out</button>
        </div>
        <Link className="homeLink" to="/">HOME</Link>
      </section>
    )
  }
})
