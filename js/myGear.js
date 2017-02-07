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
      email: ''
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
    console.log(currentItemID);
    ajax({
    url: 'https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting/'+currentItemID,
    datatype: "json",
    type: "DElETE",
    success: this.recordDeleted,
    error: this.notDeleted
    })
  },
  recordDeleted() {
    alert("record deleted")
  },
  notDeleted() {
    alert("Error")
  },

  render() {
    return (
      <section className="gearOptionsPage">
        <div className="myGearAll">
          <div className="myGear">
            <h1>{this.state.name}</h1>
            <h2>{this.state.email}</h2>
            <div>
              {
                this.state.postingsList.map((listing, i)=>{
                  var currentEmail = this.state.email
                  if (listing.email === currentEmail){
                  return (
                    <div className="listPageItems">
                      <p className="listingPageData">{listing.type}</p>
                      <p className="listingPageData">{listing.item}</p>
                      <div className="listingPageDataContact" onClick={this.deleteItem}  value={listing._id}>Delete
                      </div>
                    </div>
                  )}
                })
              }
            </div>

          </div>
        </div>
      </section>
    )
  }
})
