import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';
// 1. Store
// 2. Reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + action.value }
    case 'MUL':
      return { count: state.count * action.value }
    default:
        return state
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const renderDescription = () => {
  const count = store.getState().count;
  const remainder = count % 5;
  const upToNext = 5 - remainder;
  return `The current count is less than ${count + upToNext}`;
};

class App extends Component {

  componentDidMount(){
    store.subscribe(() => this.forceUpdate())
  }

  render(){
      return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <h3> {store.getState().count} </h3>
      <h3> {renderDescription()} </h3>
    </header>
  );
}

const Counter = (props) => {
  return (
    <div className="Counter">
      <button onClick={() => store.dispatch({ type: 'MUL', value: 3 })} id='3'> *3 </button>
      <button onClick={() => store.dispatch({ type: 'INC', value: -1 })} id='-1'> - </button>
      <button onClick={() => store.dispatch({ type: 'INC', value: +1 })} id='+1'> + </button>
      <button onClick={() => store.dispatch({ type: 'MUL', value: 5 })} id='*5'> *5 </button>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
