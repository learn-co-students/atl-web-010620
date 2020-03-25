import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

const initialState = { count: 0 };

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  );
}

class Counter extends Component {

  state = initialState

  handleInput = (e) => {
    console.log(e.target)
    switch (e.target.id) {
      case '3':
        this.setState({ count: this.state.count * 3 })
        break;
      case '-1':
        this.setState({ count: this.state.count - 1 })
        break;
      case '+1':
        this.setState({ count: this.state.count + 1 })
        break;
      case '*5':
        this.setState({ count: this.state.count * 5 })
        break;
      default:

    }
  }

  renderDescription = () => {
    const count = this.state.count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render(){
    return (
      <div className="Counter">
      <h3> {this.state.count} </h3>
      <button onClick={this.handleInput} id='3'> *3 </button>
      <button onClick={this.handleInput} id='-1'> - </button>
      <button onClick={this.handleInput} id='+1'> + </button>
      <button onClick={this.handleInput} id='*5'> *5 </button>
      <h3>{this.renderDescription()}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
