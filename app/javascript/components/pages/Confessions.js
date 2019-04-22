import React from "react"
import PropTypes from "prop-types"
import { Card , Button } from "react-bootstrap"

class Confessions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            confessions: []
        }
    }

    componentDidMount(){
        fetch('/confessions.json')
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            this.setState({confessions: json})
        })
        .catch((e) => {
            console.log("Error", e)
        })
    }

    render(){
      const { confessions } = this.state
      return (
        <React.Fragment>
        {confessions.map((confession, index) =>
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={confession.gif_url} />
            <Card.Body>
              <Card.Text>
                {confession.name}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )}
        </React.Fragment>
      );
    }

}

export default Confessions
