// Write your code here

import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionItem, inputValue} = this.props
    const {suggestion} = suggestionItem

    const inputValueImplement = () => {
      inputValue(suggestion)
    }

    return (
      <li className="list-item">
        <p>{suggestion}</p>
        <button onClick={inputValueImplement} type="button" className="button">
          <img
            className="arrow-img"
            alt="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </li>
    )
  }
}
export default SuggestionItem
