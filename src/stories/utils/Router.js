import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()


const TestRouter = (props) =>
  <Router
    history={history}
    { ...props }
  />

export {
  TestRouter,
  history,
}


