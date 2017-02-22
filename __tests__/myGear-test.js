import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MyGear from '../js/myGear'

jest.mock('../js/firebaseAuth')

describe("myGear", () => {
  let myGearComponent = {}

  beforeEach(() =>{
    myGearComponent = TestUtils.renderIntoDocument(<MyGear />)
  })
  it("Should have a display area for list", () => {
    let displayArea = myGearComponent.refs.myGearList
    expect(displayArea).toBeDefined()
  })
  it("have an object for JSON data in state", ()=> {
    let JSONdataObject = myGearComponent.state.postingsList

    expect(JSONdataObject).toEqual(expect.anything())
  })
})
