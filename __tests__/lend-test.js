import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Lend from '../js/lend'

jest.mock('../js/firebaseAuth')

describe("lend", () => {
  let lendComponent = {}

  beforeEach(() =>{
    lendComponent = TestUtils.renderIntoDocument(<Lend />)
  })
  it("Should have a section", () => {

    expect(lendComponent).toBeDefined()
    const section = TestUtils.findRenderedDOMComponentWithClass(
      lendComponent,
      "lendPage"
    )
  })
  it("Should have an input for email address", ()=> {

    let emailInput = lendComponent.refs.userEmailInput
    expect(emailInput).toBeDefined()
  })
})
