import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Landing from './landing'
import Borrow from './borrow'
import Lend from './lend'
import MyGear from './myGear'


render(
  (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Landing } />
        <Route path="/borrow" component={ Borrow } />
        <Route path="/lend" component={ Lend } />
        <Route path="/myGear" component={ MyGear }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
