// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {SearchInput: ''}

  inputValue = suggestion => {
    this.setState({SearchInput: suggestion})
  }

  onChangeValue = event => {
    this.setState({SearchInput: event.target.value})
  }

  render() {
    const {SearchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(SearchInput),
    )
    return (
      <div className="bg-container">
        <img
          className="gogole-img"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="input-container">
          <img
            className="input-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
          <input
            className="search-input"
            type="search"
            placeholder="Search Google"
            value={SearchInput}
            onChange={this.onChangeValue}
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <SuggestionItem
              suggestionItem={eachItem}
              key={eachItem.id}
              inputValue={this.inputValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
