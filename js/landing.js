import React from 'react'
import { Link } from 'react-router'
import { hashHistory } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  linkToLend(){
    hashHistory.push("/lend")
  },
  linkToGearOptions(){
    hashHistory.push("/gearOptions")
  },

  render() {
    return (
      <section className="landingPage" >
        <div className="landingButtons">
          <div className="landingButtonLend hvr-underline-from-center"
                onClick={this.linkToLend}>
            <p className="landingButtonText">LEND</p>
          </div>
          <div className="landingButtonBorrow hvr-underline-from-center"
                onClick={this.linkToGearOptions}>
            <p className="landingButtonText">BORROW</p>
          </div>
        </div>
      </section>
    )
  }
})
