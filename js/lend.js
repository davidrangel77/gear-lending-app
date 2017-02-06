import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import { hashHistory} from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },

  getInitialState() {
    return {
      name: "",
      zip: 0,
      email: "",
      phone: 0,
      item: "",
      type: "",
      description: ""
    }
  },
  onNameChange(e){
    var currentName = e.target.value
    this.setState({name:currentName})
  },
  onZipChange(e){
    var currentZip = e.target.value
    this.setState({zip:currentZip})
  },
  onEmailChange(e){
    var currentEmail = e.target.value
    this.setState({email:currentEmail})
  },
  onPhoneChange(e){
    this.setState({phone:e.target.value})
  },
  onTypeChange(){
    this.setState({type:this.refs.selectType.value})
  },
  onDescriptionChange(e){
    this.setState({description:e.target.value})
  },
  submitFormDone(){
    hashHistory.push("/gearOptions")

  },
  submitLendForm(e){
    e.preventDefault()
    var currentItems = this.state.items
    var itemType = this.refs.selectType.value
    var newItem = this.refs.newItemName.value
    this.setState({item:newItem})
    this.setState({type:itemType})
    this.refs.listItemsDisplay.insertAdjacentHTML("afterbegin",
      `<pre class="itemDisplayList">${this.refs.selectType.value},${this.refs.newItemName.value} </pre>`)
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      type: "POST",
      data: {
        name: this.state.name,
        zip: this.state.zip,
        email: this.state.email,
        phone: this.state.phone,
        item: newItem,
        type: itemType,
        description: this.state.description
      },
      success: this.onPostJsonLoaded,
      error: this.jsonNotLoaded
    })
  },

  render() {
    return (
      <section className="lendPage">
        <form className="lendForm" ref="lendForm">
          <input className="lendFormInputUserInfo"
            type="text"
            name="userName"
            ref="userName"
            placeholder="Name"
            onChange={this.onNameChange}/>
          <input className="lendFormInputUserInfo"
            type="text"
            name="userLocation"
            placeholder="Zip Code"
            onChange={this.onZipChange}/>
          <input className="lendFormInputUserInfo"
            type="text"
            name="userEmail"
            placeholder="Email"
            onChange={this.onEmailChange}/>
          <input className="lendFormInputUserInfo"
            type="text"
            name="userPhone"
            placeholder="Phone (optional)"
            onChange={this.onPhoneChange}/>
          <div ref="lendForm">
            <div className="lendFormInputItem">
              <select className="selectItemCategory" name="equipType" ref="selectType" onChange={this.onTypeChange}>
                <option value="select">Select Type</option>
                <option value="Lens">Lens</option>
                <option value="Body">Body</option>
                <option value="Lighting">Lighting</option>
                <option value="Misc">Misc.</option>
              </select>
              <input className="lendFormItem"
                type="text"
                name="userGear"
                placeholder="Enter item name and press 'ADD TO LIST'"
                ref="newItemName"/>
            </div>
          </div>
          <input className="longDescription"
            type="text"
            name="longDescription"
            placeholder="Enter long description HERE"
            ref=""
            onChange={this.onDescriptionChange}/>
          <div className="itemListDisplay" ref="listItemsDisplay">
          </div>
          <div className="formButtons">
            <input className="submitLendForm" type="submit" name="submit" value="ADD TO LIST" onClick={this.submitLendForm}/>
            <input className="submitFormDone" type="button" name="done" value="DONE" onClick={this.submitFormDone}/>
          </div>
        </form>
      </section>
    )
  }
})
