import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'

export default React.createClass({

  componentDidMount (){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      success: this.initialJsonLoaded,
      error: this.jsonNotLoaded
    })
  },
  getInitialState (){
    return {
      jsonData: []
    }
  },
  initialJsonLoaded(response){

  },

  render() {
    return (
      <section>
        <div className="gearListBackground">

        </div>
      </section>
    )
  }
})
