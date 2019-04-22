import React from "react"
import PropTypes from "prop-types"
import Home from "./pages/Home"

class UnauthenticatedApp extends React.Component {
  render () {
    return (
        <React.Fragment>
          <Home />
        </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
