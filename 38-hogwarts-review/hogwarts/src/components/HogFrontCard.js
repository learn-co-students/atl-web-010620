import React from 'react';

const HogFrontCard = (props) => {
  const slug = props.hog.name.toLowerCase().split(' ').join('_')

  return (
    <div className={'ui eight wide column'} onClick={() => props.handleCardClick(props.hog)}>
      <img src={require(`../hog-imgs/${slug}.jpg`)} alt={'image'} />
      <p>
        <h4>{props.hog.name}</h4>
      </p>
    </div>
  )
}

export default HogFrontCard;
