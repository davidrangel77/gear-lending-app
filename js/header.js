import React from 'react'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

export default React.createClass({

  linkToHome(){
    hashHistory.push("/")
  },

  render() {
    var signoutButtonClass
     = this.props.user.authed ? "nav__signOut" : "nav__signout--hide"
     var userImage
     = this.props.user.authed ? "nav__currentUserImage" : "nav__signout--hide"

    return (
      <section className="headerBackground">
        <div className="headerBranding" onClick={this.linkToHome}>
          <h1 className="headerBrandingTitle">Gear Grow</h1>
          <p className="headerBrandingText">...a place to share</p>
        </div>
        <div>
          <img className={userImage} src={this.props.user.picture} />
          <button className="nav__signIn"
              onClick={this.props.signUserIn}
              data-js="nav__signIn"> Log In </button>
            <button className={signoutButtonClass}
              onClick={this.props.signUserOut}
              data-js="nav__signOut"> Log Out</button>
        </div>
        <Link className="myGearLink" to="/myGear">MY GEAR</Link>
      </section>
    )
  }
})
