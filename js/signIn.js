import React from 'react'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  componentDidMount (){
    
  },

  render() {
    return (
      <section className="landingPage" >
        PLEASE SIGN IN ABOVE
      </section>
    )
  }
})
