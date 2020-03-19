import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.offset,props.offset+4).map(sushi => {
            const eaten = props.eatSushi.filter(eatenSushi => eatenSushi.id === sushi.id).length > 0 ? true : false
            return (<Sushi sushi={sushi} eaten={eaten} handleEatSushi={props.handleEatSushi} />)
          })
        }
        <MoreButton handleMoreBtn={props.handleMoreBtn} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
