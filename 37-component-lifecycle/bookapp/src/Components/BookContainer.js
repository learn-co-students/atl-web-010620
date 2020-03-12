import React from 'react';
import BookCard from './BookCard'

const BookContainer = (props) => {

  return (
    <div className='maincontainer'>
      {
        props.books.map(book => <BookCard
           book={book}
            key={book.id}
              handleDeleteBtnClick={props.handleDeleteBtnClick}
        />)
      }
    </div>
  )
}

export default BookContainer;
