import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import Modal from './modal'

export default React.createClass({
  getInitialState(){
    return {
      postingsList: [],
      contactName: '',
    }
  },
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  // componentWillMount() {
  //   firebase.database().ref("/Postings").once("value").then((snapshot) => {
  //    const itemPostings = snapshot.val()
  //    this.setState({
  //      postingsList: itemPostings
  //    })
  //  })
  // },
  componentDidMount (){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      success: this.initialJsonLoaded,
      error: this.jsonNotLoaded
    })
  },
  initialJsonLoaded (response){
    this.setState({
      postingsList: response
    })
  },
  findCurrentContactName(e) {
    console.log(e.target.value);
    var currentIDvalue = e.target.value
    this.state.postingsList.map((listing, i)=>{
      if (listing._id === currentIDvalue){
        var currentPostName = listing.name
        this.setState({currentName:currentPostName})
      }
    })

  },
  render() {
    return (
      <section className="gearOptionsPage">
        <div className="gearListPanesAll">
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Lenses</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Lens"){
                return (
                  <div className="listPageItems">
                    <p className="listingPageData">{listing.item}</p>
                    <div className="listingPageDataContact" href="contactModal" onClick={this.findCurrentContactName}  value={listing._id}>Contact</div>
                  </div>
                )}
              })
            }
          </div>
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Bodies</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Body"){
                return (
                  <div className="listPageItems">
                    <p className="listingPageData">{listing.item}</p>
                    <a className="listingPageData" href="contactModal">{listing.email}</a>
                  </div>
                )}
              })
            }
          </div>
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Lighting</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Lighting"){
                return (
                  <div className="listPageItems">
                    <p className="listingPageData">{listing.item}</p>
                    <p className="listingPageDataContact" href="contactModal" onClick="">Contact</p>
                  </div>
                )}
              })
            }
          </div>
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Misc.</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Misc."){
                return (
                  <div className="listPageItems">
                    <p className="listingPageData">{listing.item}</p>
                    <a className="listingPageData" href="contactModal">{listing.email}</a>
                  </div>
                )}
              })
            }
          </div>
        </div>
      </section>
    )
  }
})
