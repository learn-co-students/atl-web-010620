import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

import staticBooks from './books'

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: []
    }
  }

  render(){
    return (
      <div className="parent">
        <Header />

        <button onClick={(e) => {
          this.setState({ books: staticBooks })
        }}>Get Books</button>

        <BookContainer books={this.state.books} />
      </div>
    );
  }
}

export default App;
