import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPaper,
  faHandRock,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/2928/2928823.png",
  },
  paper: {
    name: "Paper",
    img: "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-17.jpg",
  },
};
export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null,
    };
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "TIE";
    } else if (user.name == "Rock")
      return computer.name == "scissors" ? "WIN" : "LOSE";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "WIN" : "LOSE";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "WIN" : "LOSE";
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button className="main-btn" onClick={() => this.play("rock")}>
            <FontAwesomeIcon icon={faHandRock} size="xl" />
          </button>
          <button className="main-btn" onClick={() => this.play("scissors")}>
            <FontAwesomeIcon icon={faHandScissors} size="xl" />
          </button>
          <button className="main-btn" onClick={() => this.play("paper")}>
            <FontAwesomeIcon icon={faHandPaper} size="xl" />
          </button>
        </div>
      </div>
    );
  }
}
