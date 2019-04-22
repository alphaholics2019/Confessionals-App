import React from "react"
import PropTypes from "prop-types"
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onInputChange = (term) => {
    const { onTermChange } = this.props
    this.setState({term})
    onTermChange(term)
  }

  render () {
    return (
      <React.Fragment>
        <div className="search">
          <input onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar
