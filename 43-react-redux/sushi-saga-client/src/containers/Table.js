import React, { Fragment } from 'react'
import { connect } from 'react-redux';

const Table = (props) => {
  console.log(props)

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.wallet } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eatSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state.wallet
}

export default connect(mapStateToProps)(Table)
