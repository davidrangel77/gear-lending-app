import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import Landing from './landing'
import Resume from './resume'
import Blog from './blog'
import Projects from './projects'


render(
  (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Landing } />
        <Route path="/resume" component={ Resume } />
        <Route path="/blog" component={ Blog } />
        <Route path="/projects" component={ Projects } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
