import React from "react"
import PropTypes from "prop-types"
import Confessions from "./Confessions"

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
      <h1>Anything you want to Confess?</h1>
        <Confessions/>
      </React.Fragment>
    );
  }
}

export default Home
