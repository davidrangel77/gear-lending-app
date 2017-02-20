import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Borrow from '../js/borrow'

describe("borrow", () => {
  let sectionComponent = {}

  beforeEach(() =>{
    sectionComponent = TestUtils.renderIntoDocument(<Borrow />)
  })
  it("Should have a section", () => {
    const section = TestUtils.findRenderedDOMComponentWithClass(
      sectionComponent, "gearOptionsPage")
    expect(section).toBeDefined()
  })
  it ("Should have a search bar with type text", () => {
    let searchBarType = sectionComponent.refs.gearSearchBar.type
    expect(searchBarType).toBe("text")
  })
})
