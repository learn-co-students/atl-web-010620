import React, {Component} from 'react';
import BookCard from '../Components/BookCard';

// import books from '../bookData';

class BookContainer extends Component{
  state = {
    books: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/books',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('auth_token')
      }
    })
    .then(res => res.json())
    .then(books => this.setState({ books }))
  }

  handleBookDelete = (bookObj) => {
    fetch(`http://localhost:3000/books/${bookObj.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': localStorage.getItem('auth_token')
      }
    })
    .then(res => res.json())
    .then(msg => {
      if(msg.msg !== "you're not authorized.."){
        const updatedBooks = [...this.state.books].filter(book => book.id !== bookObj.id)
        alert(msg.msg)
        this.setState({ books: updatedBooks})
      }else{
        alert(msg.msg)
      }
    })
  }

  render(){
    return (
      <div className='maincontainer'>
        { this.state.books.map(book =>
            <BookCard book={book}
              key={book.id}
                handleBookDelete={this.handleBookDelete}
            />)
        }
      </div>
    )
  }
}

export default BookContainer;
