import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Lend from '../js/lend'

describe("lend", () => {
  let sectionComponent = {}

  beforeEach(() =>{
    sectionComponent = TestUtils.renderIntoDocument(<Lend />)
  })
  it("Should have a section", () => {

    expect(sectionComponent).toBeDefined()
    const section = TestUtils.findRenderedDOMComponentWithClass(
      sectionComponent,
      "lendPage"
    )
  })
})
