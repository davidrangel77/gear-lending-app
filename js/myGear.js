import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import { hashHistory } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  getInitialState(){
    return {
      postingsList: [],
      name: '',
      email: '',
      currentID: 'NO',
      currentType: '',
      currentItem: '',
      currentDescription: '',
      newType: '',
      newItem: '',
      newDescription:'',
      isModalOpen: false
    }
  },
  initialJsonLoaded (response){
    this.setState({
      postingsList: response
    })
  },
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      success: this.initialJsonLoaded,
      error: this.jsonNotLoaded
    })
    var parent = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      var currentUser = user.displayName
      var currentEmail = user.email
      parent.setState({name:currentUser})
      parent.setState({email:currentEmail})
      }
    });
  },
  deleteItem(e) {
    var currentItemID = e.target.getAttribute('value')
    ajax({
    url: 'https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting/'+currentItemID,
    datatype: "json",
    type: "DElETE",
    success: this.recordDeleted,
    error: this.error
    })
  },
  recordDeleted() {
    alert("Record deleted!")
  },
  recordUpdated() {
    alert("Record updated!")
  },
  error() {
    alert("Error")
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
        this.setState({currentItem:listing.item})
        this.setState({currentType:listing.type})
        this.setState({currentDescription:listing.description})
      }
    })
    this.setState({isModalOpen: true})
  },
  onNewType(e){
    this.setState({newType:e.target.value})
  },
  onNewItem(e){
    this.setState({newItem:e.target.value})
  },
  onNewDescription(e){
    this.setState({newDescription:e.target.value})
  },
  submitChanges() {
    var currentItemID = this.state.currentID
    var newItem = this.state.newItem
    var newType = this.state.newType
    var newDescription = this.state.newDescription
    var updatedData = {
      type: newType,
      item: newItem,
      description: newDescription
    };
    if (newType === ""){
      updatedData.type = this.state.currentType
    }
    if (newItem === ""){
      updatedData.item = this.state.currentItem
    }
    if (newDescription === ""){
      updatedData.description = this.state.currentDescription
    }
    ajax({
    url: 'https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting/'+currentItemID,
    datatype: "json",
    type: "PUT",
    data: updatedData,
    success: this.recordUpdated,
    error: this.error
    })
  },
  backToGearPage() {
    hashHistory.push("/gearOptions")
  },
  backToLendPage() {
    hashHistory.push("/lend")
  },
  render() {
    return (
      <section className="gearOptionsPage">
        <div className="myGearAll">
          <div className="myGear">
            <h1 className="myGearName">{this.state.name}</h1>
            <h2 className="myGearEmail">{this.state.email}</h2>
            <div>
              {
                this.state.postingsList.map((listing, i)=>{
                  var currentEmail = this.state.email
                  if (listing.email === currentEmail){
                  return (
                    <div key={i} className="listPageItems">
                      <p className="listingPageData">{listing.type}</p>
                      <p className="listingPageData">{listing.item}</p>
                      <div className="listingPageDataContact" onClick={this.deleteItem}  value={listing._id}>Delete
                      </div>
                      <div className="listingPageDataContact" onClick={this.findCurrentId}  value={listing._id}>Update
                      </div>
                    </div>
                  )}
                })
              }
            </div>
            <div className="myGearButtons">
              <button className="backToGearButton" onClick={this.backToGearPage}>Back to Gear Options</button>
              <button className="backToLendButton" onClick={this.backToLendPage}>Back to Lend</button>
            </div>
          </div>
        </div>
        <div className="modalPosition">
          <div className={this.getModalOpenState() ? "visible" : "hidden"}>
            <form className="updateForm">
              <p>Current Type: {this.state.currentType}</p>
              <label>Change Item Type</label>
              <input type="text" onChange={this.onNewType}></input>
              <p>Current Item Name:{this.state.currentItem}</p>
              <label>Change Item Name</label>
              <input type="text" onChange={this.onNewItem}></input>
                <p>Current Description:{this.state.currentDescription}</p>
                <label>Change Item Description</label>
                <input type="text" onChange={this.onNewDescription}></input>
                <p className="modalItemText"><button className="updateFormButton" onClick={this.submitChanges}>Submit</button></p>
            </form>
            <p className="modalItemText"><button className="updateFormButton" onClick={() => this.makeModalCloseState()}>Cancel/Done</button></p>
            </div>
        </div>
      </section>
    )
  }
})
