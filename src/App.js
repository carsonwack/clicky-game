import React, { Component } from 'react';
import './App.css';
import shuffle from "shuffle-array";



class Game extends Component {

  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to Begin!",
    clicked: [],
    imgList: ['jinping', 'putin', 'trump', 'merkel', 'bezos', 'francis', 'gates', 'salman', 'modi', 'page', 'powell', 'macron']
  }


  handleClick = (name) => {
    let { score, topScore, message, clicked, imgList } = this.state;
    if (clicked.includes(name)) {
      this.setState({
        score: 0,
        message: "Oops that was already clicked 😣. Try again!",
        clicked: [],
        imgList: shuffle(imgList)
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
        clicked: clicked.concat([name]),
        imgList: shuffle(imgList)
      })
    }
  };


  render() {
    return (
      <div className="wrap">
        <div className="header">
          <h3>Click an image to score -- But don't click any more than once!</h3>
        </div>
        <div>
          <nav className="navbar" id="navbar">
            <ul>
              <li className="brand" id="home">
                <a href="/">Clicky Game</a>
              </li>
              <li id="message">
                {this.state.message}
              </li>
              <li id="score">
                Score: {this.state.score} &nbsp; | &nbsp; Top Score: {this.state.topScore}
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div col-md-6="true" offset-3="true" id="main-column">
            {
              this.state.imgList.map(name =>
                <img
                  key={name}
                  src={require(`./../public/img/${name}.png`)}
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
