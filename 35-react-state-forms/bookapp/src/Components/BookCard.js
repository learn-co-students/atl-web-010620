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

    </div>
  )
}

export default BookCard;
