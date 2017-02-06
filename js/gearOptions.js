import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import Modal from './modal'

export default React.createClass({
  getInitialState(){
    return {
      postingsList: [],
      contactName: '',
      currentID: 'NO',
      currentName: '',
      currentEmail: '',
      isModalOpen: false
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
  updatePostVisible (){
    this.setState({isModalOpen: true})
  },
  makeModalCloseState (){
    this.setState({isModalOpen: false})
  },
  getModalOpenState(){
    return this.state.isModalOpen
  },

  findCurrentId(e) {
    var currentIDNumber = e.target.getAttribute('value')
    this.state.postingsList.map((listing, i)=>{
      if (listing._id === currentIDNumber){
        this.setState({currentID:currentIDNumber})
        this.setState({currentName:listing.name})
        this.setState({currentEmail:listing.email})
      }
    })
    this.setState({isModalOpen: true})
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
                    <div className="listingPageDataContact" href="contactModal" onClick={this.findCurrentId}  value={listing._id}>Contact
                    </div>
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
                      <div className="listingPageDataContact" href="contactModal" onClick={this.findCurrentId}  value={listing._id}>Contact
                      </div>
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
          <div className="modalPosition">
            <div className={this.getModalOpenState() ? "visible" : "hidden"}>
              <div className="modalBackground">
                <p>{this.state.currentName}</p>
                <a href="mailto:{this.state.currentEmail}">{this.state.currentEmail}</a>
                <p><button className="clickhere_button" onClick={() => this.makeModalCloseState()}>Close</button></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
