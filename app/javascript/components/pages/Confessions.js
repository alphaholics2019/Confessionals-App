import React from "react"
import PropTypes from "prop-types"

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
            <table>
                <tbody>
                    <tr>
                      <th>Confession</th>
                    </tr>
                    {confessions.map((confession, index) =>
                      <tr key={index}>
                          <td>{confession.user_id}</td>
                          <td>{confession.name}</td>
                          <td>{confession.gif_url}</td>
                      </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
      );
    }

}

export default Confessions
