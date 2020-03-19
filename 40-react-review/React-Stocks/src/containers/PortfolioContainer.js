import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock => <Stock stock={stock} key={stock.id} handleStockClick={this.props.handleStockClick} />)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
