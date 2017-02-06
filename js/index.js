import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Landing from './landing'
import GearOptions from './gearOptions'
import Lenses from './lenses'
import Lights from './lights'
import Misc from './misc'
import Lend from './lend'


render(
  (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Landing } />
        <Route path="/gearOptions" component={ GearOptions } />
        <Route path="/lenses" component={ Lenses } />
        <Route path="/lights" component={ Lights } />
        <Route path="/misc" component={ Misc } />
        <Route path="/lend" component={ Lend } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
