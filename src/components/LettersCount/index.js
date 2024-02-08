import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class LettersCount extends Component {
  state = {userInput: '', letterCount: true, letters: []}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput !== '') {
      const newLetter = {
        id: uuidv4(),
        text: userInput,
      }
      this.setState(prevState => ({
        letterCount: false,
        letters: [...prevState.letters, newLetter],
        userInput: '',
      }))
    }
  }

  render() {
    const {userInput, letterCount, letters} = this.state
    return (
      <div className="bg-container">
        <div className="letter-count-container">
          <div className="letter-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          <div>
            {letterCount ? (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            ) : (
              <div className="letters-container">
                <ul>
                  {letters.map(letter => (
                    <li
                      key={letter.id}
                      className="letters"
                    >{`${letter.text} : ${letter.text.length}`}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="letter-input-container">
          <div className="input-container">
            <h1 className="input-heading">Character Counter</h1>
          </div>
          <div className="input-list-container">
            <form onSubmit={this.onClickAddButton}>
              <input
                type="text"
                className="input"
                value={userInput}
                onChange={this.onChangeInput}
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCount
