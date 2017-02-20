import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import { hashHistory } from 'react-router'

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
      currentItem: 'Nikon D700',
      currentDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isSearchModalOpen: false,
      isModalOpen: false,
      zipInfo: {},
      currentLat: '40.702147',
      currentLong: '-74.015794',
      searchInfo: "",
      loggedIn: false
    }
  },
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  componentDidMount (){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting1",
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
    this.setState({currentLat:'40.702147', currentLong:'-74.015794'})
    this.refs.mapImage.className="hidden"
  },
  getModalOpenState(){
    return this.state.isModalOpen
  },
  onSearchInfoChange(e){
    this.setState({searchInfo:e.target.value})
  },
  getSearchModalOpenState(){
    return this.state.isSearchModalOpen
  },
  searchModal(){
    this.setState({isSearchModalOpen:true})
    this.refs.gearListPanesAll.className="hidden"
    this.refs.searchForm.className="hidden"
    this.refs.searchForm.reset()
  },
  closeSearchModal(){
    this.setState({isSearchModalOpen:false})
    this.refs.gearListPanesAll.className="gearListPanesAll"
    this.refs.searchForm.className="gearOptionsSearch"
  },
  getZipCode() {
    var currentZip = this.state.currentZip
    var urlToFindZip = "https://maps.googleapis.com/maps/api/geocode/json?address="+currentZip+"&key=AIzaSyDz0Z4OLAAZrhyHLh8JEkGhkntNYivudBM"
    ajax({
      url: urlToFindZip,
      success: this.logZip,
      error: this.error
    })
    this.refs.mapImage.className="visible modalMap"
  },
  // look into using the results from response instead of setiing state object
  logZip(response) {
    this.setState({zipInfo:response})
    var lat = this.state.zipInfo.results[0].geometry.location.lat
    var lng = this.state.zipInfo.results[0].geometry.location.lng
    this.setState({currentLat:lat})
    this.setState({currentLong:lng})
  },
  openContactModal(e) {
    var currentIDNumber = e.target.getAttribute('value')
    this.state.postingsList.map((listing, i)=>{
      if (listing._id === currentIDNumber){
        this.setState({currentID:currentIDNumber})
        this.setState({currentName:listing.name})
        this.setState({currentEmail:listing.email})
        this.setState({currentZip:listing.zip})
        this.setState({currentPhone:listing.phone})
        this.setState({currentItem:listing.item})
        if (listing.description === "" || null){
          this.setState({currentDescription:"No description"})
        }else {
        this.setState({currentDescription:listing.description})}
      }
    })
    this.setState({isModalOpen: true})
  },

  render() {
    return (
      <section className="gearOptionsPage">
        <form className="gearOptionsSearch"
            onSubmit={this.searchModal}
            ref="searchForm">
          <input className="gearOptionsSearchInput"
            ref="gearSearchBar"
            placeholder="Search by item name or keyword"
            onChange={this.onSearchInfoChange}
            type="text"/>
        </form>
        <div className="gearListPanesAll" ref="gearListPanesAll">
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Lenses</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Lens"){
                return (
                  <div className="listPageItems">
                    <button className="listingPageDataContact" onClick={this.openContactModal} value={listing._id}>Details
                    </button>
                    <p className="listingPageData">{listing.item}</p>
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
                    <button className="listingPageDataContact" onClick={this.openContactModal}  value={listing._id}>Details
                    </button>
                    <p className="listingPageData">{listing.item}</p>
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
                    <button className="listingPageDataContact"
                      onClick={this.openContactModal}
                      value={listing._id}>Details</button>
                    <p className="listingPageData">{listing.item}</p>
                  </div>
                )}
              })
            }
          </div>
          <div className="gearListPane">
            <h1 className="gearListPaneTitle">Misc.</h1>
            {
              this.state.postingsList.map((listing, i)=>{
                if (listing.type === "Misc"){
                return (
                  <div className="listPageItems">
                    <button className="listingPageDataContact"
                       onClick={this.openContactModal} value={listing._id}>Details</button>
                    <p className="listingPageData">{listing.item}</p>
                  </div>
                )}
              })
            }
          </div>
        </div>
        <div className="modalPosition">
          <div className={this.getSearchModalOpenState() ? "visible" : "hidden"}>
            <div className="gearSearchModal">
              <h1 className="gearListPaneTitle">Results</h1>
              <div className="gearResults">
                {
                  this.state.postingsList.map((listing, i)=>{
                    if (listing.item.toLowerCase().indexOf(this.state.searchInfo.toLowerCase()) > -1){
                    return (
                      <div className="listPageItems">
                        <button className="listingPageDataContact" onClick={this.openContactModal}  value={listing._id}>Details
                        </button>
                        <p className="listingPageData">
                          <b>{listing.type}</b></p>
                        <p className="listingPageData">{listing.item}</p>
                      </div>
                    )}
                  })
                }
              </div>
              <p className="modalItemText"><button className="closeSearchButton" onClick={() => this.closeSearchModal()}>Close</button></p>
            </div>
          </div>
        </div>
        <div className="modalPosition">
          <div className={this.getModalOpenState() ? "visible" : "hidden"}>
            <div className="modal">
              <div className="modalUserInfo">
                <p className="modalItemName">{this.state.currentName}</p>
                <a className="modalItemEmail"
                  href={"mailto:"+this.state.currentEmail}>
                  {this.state.currentEmail}</a>
                <p className="modalItemPhone">{this.state.currentPhone}</p>
              </div>
              <p className="modalItemName">{this.state.currentItem}</p>
              <p className="modalItemDescription">{"''"+this.state.currentDescription+"''"}</p>
              <div className="modalItemZipElement"
                  value={this.state.currentZip}>
                <button className="locationButton" ref="locationButton" onClick={this.getZipCode}>Click to show approx location</button>
                <img className="hidden" ref="mapImage" src={"https://maps.googleapis.com/maps/api/staticmap?center=San+Antonio,TX&zoom=10&size=560x460&markers=color:red%7Clabel:%7C"+this.state.currentLat+","+this.state.currentLong+"&key=AIzaSyDz0Z4OLAAZrhyHLh8JEkGhkntNYivudBM"}></img>
              </div>
              <p className="modalItemText"><button className="closeModalButton" onClick={() => this.makeModalCloseState()}>Close</button></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
