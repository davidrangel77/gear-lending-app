import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  getInitialState() {
    return {
      name: "",
      zip: 0,
      email: "",
      phone: 0,
      items:[],
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
  onItemAdd(e){
    e.preventDefault()
    var currentItems = this.state.items
    var newItems = this.state.items.concat(this.refs.newItemName.value)
    this.setState({items:newItems})
    this.refs.listItemsDisplay.insertAdjacentHTML("afterbegin",
      `<pre class="itemDisplayList">${this.refs.newItemName.value}, </pre>`)
  },
  submitLendForm(e){
    e.preventDefault()
    console.log(this.state);
  },

  render() {
    return (
      <section className="lendPage">
        <form className="lendForm">
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
              <input className="lendFormItem"
                type="text"
                name="userGear"
                placeholder="Enter item and press 'ADD'"
                ref="newItemName"/>
              <input className="addItem"
                type="submit"
                value="ADD"
                onClick={this.onItemAdd}/>
            </div>
          </div>
          <div className="itemListDisplay" ref="listItemsDisplay">

          </div>
          <input className="submitLendForm" type="submit" name="submit" value="SUBMIT" onClick={this.submitLendForm}/>
        </form>
      </section>
    )
  }
})
