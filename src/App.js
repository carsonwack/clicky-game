import React, { Component } from 'react';
import './App.css';
import shuffle from "shuffle";

let collection = [1,2,3,4,5];
shuffle(collection);
console.log(collection);

const imgList = ['jinping', 'putin', 'trump', 'merkel', 'bezos', 'francis', 'gates', 'salman', 'modi', 'page', 'powell', 'macron'];


class Game extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to Begin!",
    clicked: []
  }



  handleClick = (name) => {
    let { score, topScore, message, clicked } = this.state;
    if (clicked.includes(name)) {
      this.setState({
        score: 0,
        message: "Oops that was already clicked 😣. Try again!",
        clicked: []
      })
    } else {
      score += 1;
      if (score > topScore) {
        topScore = score
      }
      message = "Nice!";
      clicked = clicked.concat([name]);
      if (score === 12) {
        score = 0;
        message = "You got em all 🎉🎉🎉";
        clicked = []
      }
      this.setState({
        score: score,
        topScore: topScore,
        message: message,
        clicked: clicked.concat([name])
      })
    }
  };


  render() {
    return (
      <div className="wrap">
        <div>
          <nav className="navbar">
            <ul>
              <li className="brand">
                <a href="/">Clicky Game</a>
              </li>
              <li>
                {this.state.message}
              </li>
              <li>
                Score: {this.state.score} &nbsp; | &nbsp; Top Score: {this.state.topScore}
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div col-md-8="true" offset-2="true">
            {
              imgList.map(name =>
                <img
                  key={name}
                  src={require(`./public/img/${name}.png`)}
                  alt={name}
                  className="namedImgs"
                  onClick={() => this.handleClick(name)}
                />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
