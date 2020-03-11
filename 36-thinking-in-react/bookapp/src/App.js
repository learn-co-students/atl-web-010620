import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'


// import staticBooks from './books'

class App extends Component {

  state = {
    books: [],
    addingBook: false
  }

  handleClick = (e) => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books })
    })
  }

  handleBookSubmit = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] })
  }

  handleRenderingComponents = () => {
     if(this.state.addingBook){
        return (
          <BookForm handleBookSubmit={this.handleBookSubmit} />
      )
    }else{
      return (
        <BookContainer books={this.state.books} handleDeleteBtnClick={this.handleDeleteBtnClick}/>
      )
    }
  }

  handleDeleteBtnClick = (e,bookObj) => {
    // 1. Delete the book from the Db => fetch req
    fetch(`http://localhost:3000/books/${bookObj.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(deletedBookObj => {
      // 2. Get rid of the book from the DOM
      // - Delete the book from the state => books array
      const newBooksArray = [...this.state.books].filter((book) => book.id !== bookObj.id)
      // - cause a re-render
      this.setState({ ...this.state, books: newBooksArray })
    })
  }

  render(){
    return (
      <div className="parent">
        <Header />
        <button onClick={this.handleClick}> Get Books </button>
        <button onClick={() => this.setState({ addingBook: !this.state.addingBook })}> Add a Books </button>
        { this.handleRenderingComponents() }
      </div>
    );
  }
}

export default App;
