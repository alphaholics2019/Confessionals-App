import React from "react"
import PropTypes from "prop-types"
import GifList from "../GifList"
import SearchBar from "../SearchBar"
import { Form, Button } from "react-bootstrap"
import request from "superagent"

class Confess extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: "",
      gif_url: ""
    },
    gifs: []
    }
  }


    render() {
        return (
          <div>
            <h1>Confess Here</h1>
            <form>
                <label>Confession Box</label>
                <input type="text" name="name" />

  handleNewConfession = (confessionForm) => {
    const BASE = 'http://localhost:3000'
  	return fetch(BASE + '/confessions', {
  		body: JSON.stringify(confessionForm),
  		headers: {
  			'Content-Type': 'application/json'
  		},
  		method: "POST"
  	})
  		.then((resp) => {
  			let json = resp.json()


  			return json
  		})
  }

  handleFormChange = (event) => {
    const { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleGifSelect = (event) => {
    console.log(event);
    const { form } = this.state
    form.gif_url = event.images.downsized.url
    this.setState({form: form})
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=fQTt4fDxOpLvR7UCN5XCwQt8QdJrCx9Y`;

    request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data })
    });
  }

  render() {
    const { name, gif_url } = this.state.form
    return (
      <div>
        <Form>
            <Form.Label id="name">Confession Box</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Confession"
              onChange={this.handleFormChange}
              value={name}
            />
          <Button type="submit" onClick={()=>this.handleNewConfession(this.state.form)}>Submit</Button>
        </Form>
        <br/>
        <SearchBar
          onTermChange={term => this.handleTermChange(term)}
        />
        <br/>
        <GifList
          gifs={this.state.gifs}
          gifSelect={this.handleGifSelect}
        />
      </div>
    )
  }
}

export default Confess
