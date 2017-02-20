import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../js/app'

jest.mock('../js/firebaseAuth')

describe("app", () => {
  let appComponent = {}

  beforeEach(() =>{
    appComponent = TestUtils.renderIntoDocument(<App />)
  })
  it("Should have a section", () => {
    let appSection = appComponent.refs.app

    expect(appSection).toBeDefined()
  })
  it("Should have a user state object", () => {
    let state = appComponent.state.user

    expect(state).toMatchObject({
      authed: false,
      name: '',
      email: '',
      picture: '',
      lastLogin: undefined
    })
  })
})
