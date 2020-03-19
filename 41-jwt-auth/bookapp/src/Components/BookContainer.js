import React from 'react';
import BookCard from './BookCard'

class BookContainer extends React.Component {

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
    .then(books => {
      this.setState({ books: books })
    })
  }

  render(){
    return (
      <div className='maincontainer'>
        {
          this.state.books.map(book => <BookCard
             book={book}
              key={book.id}
                handleDeleteBtnClick={this.props.handleDeleteBtnClick}
          />)
        }
      </div>
    )
  }
}

export default BookContainer;
