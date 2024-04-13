// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isChange: true}

  showResult = () => {
    this.setState({isChange: false})
  }

  render() {
    const {isChange} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bgContainer">
        {isChange ? (
          <div className="smContainer">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <div className="emojiContainer">
              <ul className="ulContainer">
                {emojis.map(eachEmoji => (
                  <li className="emojiLists" key={eachEmoji.id}>
                    <button
                      type="button"
                      className="button"
                      onClick={this.showResult}
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="imagy"
                      />
                      <span>{eachEmoji.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} className="image-card" alt="love emoji" />
            <h1 className="head-card">Thank You!</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
