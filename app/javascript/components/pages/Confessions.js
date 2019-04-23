import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import Upvote from "../Upvote";

class Confessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confessions: []
    };
  }

  componentDidMount() {
    fetch("/confessions.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ confessions: json });
      })
      .catch(e => {
        console.log("Error", e);
      });
  }

  render() {
    const { confessions } = this.state;
    const { id } = this.props.current_user;
    return (
      <React.Fragment>
      <div id="all" class="d-flex flex-wrap">
        {confessions.map((confession, index) => {
          if (confession.user_id === id) {
            return (
              <Card style={{ width: "18rem" }} key={index}>
                <Upvote />
                <Card.Img variant="top" src={confession.gif_url} />
                <Card.Body>
                  <Card.Text>{confession.name}</Card.Text>
                </Card.Body>
              </Card>
            );
          } else {
            console.log("Nothing to Display");
          }
        })}
      </div>
      </React.Fragment>
    );
  }
}

export default Confessions;
