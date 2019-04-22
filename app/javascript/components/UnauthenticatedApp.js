import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import { Navbar, Nav, Button } from 'react-bootstrap'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
        <React.Fragment>
          <Home/>
        </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
