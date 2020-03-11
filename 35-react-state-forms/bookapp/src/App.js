import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

import staticBooks from './books'

class App extends Component {
  constructor(){
    super()
    this.state = {
      books: [],
      title: '',
      author: '',
      img: '',
      addingBook: false
    }
  }

  handleClick = (e) => {
    // 1. Fetch
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      console.log(books)
      // 2. Store those books && call setState with the books
      this.setState({ books: books })
    })
  }

  handleInputChange = (e) => {

    if(e.target.name === 'title'){
      this.setState({ title: e.target.value })
    }else if(e.target.name === 'img'){
      this.setState({ img: e.target.value })
    }else if(e.target.name === 'author'){
      this.setState({ author: e.target.value })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newBook = {
      title: this.state.title,
      img: this.state.img,
      author: this.state.author,
      read: false
    }

    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        "Content-Type":'application/json'
      },
      body: JSON.stringify(newBook)
    }).then(res => res.json())
    .then(newBookObj => {
      console.log(newBookObj)
      this.setState({
        title: '',
        author: '',
        img: '',
        books: [...this.state.books, newBookObj]
      })
    })
  }

  handleRenderingComponents = () => {
     if(this.state.addingBook){
        return (
          <span className={'form-outer'}>
          <h2> Add a new book </h2>
          <form className={'add-book'} onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.title} onChange={this.handleInputChange} name='title' placeholder="title"  />
            <input type="text" value={this.state.img} onChange={this.handleInputChange} name='img' placeholder="img"  />
            <input type="text" value={this.state.author} onChange={this.handleInputChange} name='author' placeholder="author"  />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </span>
      )
    }else{
      return (
        <BookContainer books={this.state.books} />
      )
    }
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
