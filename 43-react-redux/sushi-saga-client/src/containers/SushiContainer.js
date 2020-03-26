import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

import actions from '../actions';

import { connect } from 'react-redux';
// Endpoint!
const API = "http://localhost:3000/sushis"

class SushiContainer extends React.Component {

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.props.get_sushi(sushis))
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.slice(this.props.offset,this.props.offset+4).map(sushi => {
              const eaten = this.props.eatSushi.filter(eatenSushi => eatenSushi.id === sushi.id).length > 0 ? true : false
              return (<Sushi key={sushi.id} sushi={sushi} eaten={eaten} handleEatSushi={this.props.eat_sushi} />)
            })
          }
          <MoreButton handleMoreBtn={this.props.more_sushi}/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.sushi,
    eatSushi: state.wallet.eatSushi
  }
}

export default connect(mapStateToProps,actions)(SushiContainer);
