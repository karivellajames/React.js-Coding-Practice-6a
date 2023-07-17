// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changeNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: getRandomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.changeNumber}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
