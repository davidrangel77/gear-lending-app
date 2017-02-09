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
      newType: 'No Change',
      newItem: '',
      newDescription:'',
      isModalOpen: false
    }
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
  initialJsonLoaded (response){
    this.setState({
      postingsList: response
    })
  },
  deleteItem(e) {
    var currentItemID = e.target.getAttribute('value')
    ajax({
    url: 'https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting/'+currentItemID,
    datatype: "json",
    type: "DElETE",
    success: this.recordUpdated,
    error: this.error
    })
  },
  recordUpdated() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      success: this.initialJsonLoaded,
      error: this.jsonNotLoaded
    })
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
  updateGear(e) {
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
  onNewType(){
    this.setState({newType:this.refs.selectType.value})
  },
  onNewItem(e){
    this.setState({newItem:e.target.value})
  },
  onNewDescription(e){
    this.setState({newDescription:e.target.value})
  },
  submitChanges(e) {
    e.preventDefault()
    var currentItemID = this.state.currentID
    var newItem = this.state.newItem
    var newType = this.state.newType
    var newDescription = this.state.newDescription
    var updatedData = {
      type: newType,
      item: newItem,
      description: newDescription
    };
    if (newType === "No Change"){
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
    this.setState({isModalOpen: false})
  },
  backToGearPage() {
    hashHistory.push("/borrow")
  },
  backToLendPage() {
    hashHistory.push("/lend")
  },
  render() {
    return (
      <section className="gearOptionsPage">
        <div className="myGearAll">
          <div className={this.getModalOpenState() ? "hidden" : "visible"}>
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
                        <button className="myGearUpdateButton" onClick={this.updateGear}  value={listing._id}>Update
                        </button>
                        <p className="myGearPageData">{listing.type}</p>
                        <p className="myGearPageData">{listing.item}</p>
                        <button className="myGearDeleteButton" onClick={this.deleteItem}  value={listing._id}>Remove
                        </button>
                      </div>
                    )}
                  })
                }
              </div>
              <div className="myGearButtons">
                <button className="backToButton" onClick={this.backToGearPage}>To Borrow</button>
                <button className="backToButton" onClick={this.backToLendPage}>To Lend</button>
              </div>
            </div>
          </div>
        </div>
        <div className="updateModalPosition">
          <div className={this.getModalOpenState() ? "visible" : "hidden"}>
            <form className="updateForm">
              <p className="currentItemLabel">Current Item Type:</p>
              <p className="currentItemInfo">{this.state.currentType}</p>
              <label className="updateLabel">Change Item Type</label>
                <br></br>
              <select className="newItemType" name="equipType" ref="selectType" onChange={this.onNewType}>
                <option value="No Change">No Change</option>
                <option value="Lens">Lens</option>
                <option value="Body">Body</option>
                <option value="Lighting">Lighting</option>
                <option value="Misc">Misc.</option>
              </select>
              <p className="currentItemLabel">Current Item Name:</p>
              <p className="currentItemInfo">{this.state.currentItem}</p>
              <label className="updateLabel">Change Item Name</label>
                <br></br>
              <input className="updateInputName" type="text" onChange={this.onNewItem}></input>
                <p className="currentItemLabel">Current Description:</p>
                <p className="currentItemInfo">{this.state.currentDescription}</p>
                <label className="updateLabel">Change Item Description</label>
                  <br></br>
                <input className="updateInputDescription" type="text" onChange={this.onNewDescription}></input>
                <div className="formButtons">
                  <button className="updateFormButton" onClick={this.submitChanges}>Submit</button>
                  <button className="updateFormDone"
                    onClick={this.makeModalCloseState}><sp style={{color:"red"}}>Cancel</sp>/Done
                  </button>
                </div>
            </form>
            </div>
        </div>
      </section>
    )
  }
})
