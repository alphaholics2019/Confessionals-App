import React from "react"
import PropTypes from "prop-types"
import { DropdownButton, Dropdown } from 'react-bootstrap'
import Confessions from "./Confessions"

class Home extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        confessions: [{text: "Aconfession text", url: "gif_url1"},
         {text: "Bconfession text", url: "gif_url2"},
         {text: "confession text", url: "gif_url3"}]
      }
  }

  // componentDidMount(){
  //     fetch('/confessions.json')
  //     .then((response) => {
  //         return response.json()
  //     })
  //     .then((json) => {
  //         this.setState({confessions: json})
  //     })
  //     .catch((e) => {
  //         console.log("Error", e)
  //     })
  // }

  // sortByRecent = () => {
  //
  // }

  sortByTextDescending = () => {
    const myData = [].concat(this.state.confessions)
        .sort((a, b) => a.text < b.text)
    this.setState({confessions: myData})
  }

  render () {
    const { confessions } = this.state
    return (
      <React.Fragment>
      <DropdownButton id="dropdown-basic-button" title="Sort By">
        <Dropdown.Item><div onClick={this.sortByTextDescending}>Text</div></Dropdown.Item>
      </DropdownButton>
      <table>
      <tbody>
        <tr>
        {confessions.map((confession, index) =>
          <td key={index}>
              <tr>{confession.text}</tr>
              <tr>{confession.url}</tr>
          </td>
        )}
        </tr>
      </tbody>
      </table>
      <h1>Anything you want to Confess?</h1>
        <Confessions/>
      </React.Fragment>
    );
  }
}

export default Home
