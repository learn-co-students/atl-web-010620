import React from 'react'

const BookCard = (props) => {

  return (
    <div className='bookcard' data-id={props.book.id}>

      <img src={ props.book.img } alt='' />

      <div className='booktitle'>
        Book: { props.book.title }
      </div>

      <div className='booktitle'>
        Author: { props.book.author }
      </div>

      <div className='booktitle'>
        <button onClick={() => props.handleBookDelete(props.book)}>
          <span role="img" aria-label="Delete">
            ❌
          </span>
        </button>
      </div>

    </div>
  )
}

export default BookCard;
