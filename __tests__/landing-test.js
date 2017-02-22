import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Landing from '../js/landing'

describe("landing", () => {
  let landingComponent = {}

  beforeEach(() =>{
    landingComponent = TestUtils.renderIntoDocument(<Landing />)
  })
  it("Should have a landing", () => {
    const landing = TestUtils.findRenderedDOMComponentWithClass(
      landingComponent, "landingPage")
    expect(landing).toBeDefined()
  })
  it ("Should have a button to direct to Lend page", () => {
    let lendButton = landingComponent.refs.lendButton
    expect(lendButton).toBeDefined();
  })
})
