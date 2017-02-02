import React from 'react'
import { Link } from 'react-router'
import { ajax } from 'jquery'
import { hashHistory} from 'react-router'

export default React.createClass({

  getInitialState() {
    return {
      name: "",
      zip: 0,
      email: "",
      phone: 0,
      item: "",
      type: ""
    }
  },
  onNameChange(e){
    this.setState({name:e.target.value})
  },
  onZipChange(e){
    this.setState({zip:e.target.value})
  },
  onEmailChange(e){
    this.setState({email:e.target.value})
  },
  onPhoneChange(e){
    this.setState({phone:e.target.value})
  },
  onTypeChange(){
    this.setState({type:this.refs.selectType.value})
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
    console.log(this.state);

    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/davidRangel-gearAppTesting",
      datatype: "json",
      type: "POST",
      data: {
        User: this.state.name,
        Zip: this.state.zip,
        Email: this.state.email,
        Phone: this.state.phone,
        Items:{
          item: this.state.item,
          type: this.state.type
        }
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
            placeholder="User Name"
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
