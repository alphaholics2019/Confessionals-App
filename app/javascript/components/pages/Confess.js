import React from "react"
import PropTypes from "prop-types"
import Tenor from "react-tenor"

class Confess extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                gif_url: ""
            }
        }
    }

    render() {
        return (
          <div>
            <h1>Confess Here</h1>
            <form>
                <label>Confession Box</label>
                <input type="text" name="name" />

                <input type="submit" value="Submit" />
            </form>
            <Tenor token="98ZLNV4AZJG0" onSelect={result => console.log(result.url)} />
          </div>
        )
    }
}

export default Confess
