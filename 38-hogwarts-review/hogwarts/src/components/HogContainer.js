import React from 'react';
import HogFrontCard from './HogFrontCard';
import HogBackCard from './HogBackCard';

const HogContainer = (props) => {

  return (
    <div className={'ui grid container'}>
      {
        props.hogs.map(hog =>
          hog.showDetails
            ? <HogBackCard
                key={hog.name}
                  hog={hog}
                    handleCardClick={props.handleCardClick} />
              : <HogFrontCard
                  key={hog.name}
                    hog={hog}
                      handleCardClick={props.handleCardClick} />)
      }
    </div>
  )
}

export default HogContainer;
