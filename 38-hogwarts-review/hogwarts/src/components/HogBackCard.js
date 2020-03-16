import React from 'react';

const HogBackCard = (props) => {
  const { specialty, greased, weight } = props.hog

  return (
    <div className={'ui eight wide column'} onClick={() => props.handleCardClick(props.hog)}>
      <ul>
        <li> Specialty: {specialty} </li>
        <li> Greased: {greased} </li>
        <li> Weight: {weight} </li>
        <li> highest medal achieved: {props.hog['highest medal achieved']} </li>
      </ul>
    </div>
  )
}

export default HogBackCard;
