import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'

export default React.createClass({
  getInitialState(){
    return {
      postingsList: [],
      contactName: '',
      currentID: 'NO',
      currentName: 'First Name',
      currentEmail: 'email@email.com',
      currentZip: '78227',
      currentPhone: '2105551234',
      currentDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        this.setState({currentZip:listing.zip})
        this.setState({currentPhone:listing.phone})
        this.setState({currentDescription:listing.description})
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
                    <div className="listingPageDataContact" onClick={this.findCurrentId}  value={listing._id}>More...
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
                      <div className="listingPageDataContact" onClick={this.findCurrentId}  value={listing._id}>More...
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
                    <p className="listingPageDataContact" onClick={this.findCurrentId} value={listing._id}>More...</p>
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
                    <p className="listingPageDataContact" onClick={this.findCurrentId} value={listing._id}>More...</p>
                  </div>
                )}
              })
            }
          </div>
          <div className="modalPosition">
            <div className={this.getModalOpenState() ? "visible" : "hidden"}>
              <div className="modalBackground">
                <p className="modalItemName">{this.state.currentName}</p>
                <a className="modalItemEmail"
                  href={"mailto:"+this.state.currentEmail}>{this.state.currentEmail}</a>
                <p className="modalItemPhone">{this.state.currentPhone}</p>
                <div className="modalItemZipElement"
                    value={this.state.currentZip}>
                  <p className="modalItemZip">{this.state.currentZip}</p>
                  <p style={{margin:0}}>(click to view map)</p>
                </div>
                <p className="modalItemDescription">{"''"+this.state.currentDescription+"''"}</p>
                <p className="modalItemText"><button className="closeModalButton hvr-underline-from-center" onClick={() => this.makeModalCloseState()}>X</button></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
