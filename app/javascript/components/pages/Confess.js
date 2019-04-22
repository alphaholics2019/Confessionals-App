import React from "react"
import PropTypes from "prop-types"
import Tenor from "react-tenor"
import { Form, Button } from "react-bootstrap"

class Confess extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: "",
      gif_url: ""
      }
    }
  }

    handleFormChange = (event) => {
      const { form } = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    handleGifSelect = (event) => {
      const { form } = this.state
      form.gif_url = event.url
      this.setState({form: form})
    }

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

    render() {
        const { name } = this.state.form
        console.log(this.state);
        return (
            <div>
                <h1>Confess Here</h1>
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
              <Tenor
                name="gif_url"
                token="98ZLNV4AZJG0"
                onSelect={this.handleGifSelect}
              />
            </div>
            )
        }
}

export default Confess
