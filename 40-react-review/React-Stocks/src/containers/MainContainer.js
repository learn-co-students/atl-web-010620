import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
      ogStocks: [],
      stocks: [],
      portfolio: [],
      sort: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({ stocks, ogStocks: stocks }))
  }

  handleStockClick = (stock) => {
    if( [...this.state.portfolio].filter(portStock => portStock.id === stock.id).length === 0 ){
      this.setState({ portfolio: [...this.state.portfolio, stock] })
    }
  }

  handleRemoveStock = (stock) => {
    const newPortfolioStocks = [...this.state.portfolio].filter(portStock => portStock.id !== stock.id)
    this.setState({ portfolio: newPortfolioStocks })
  }

  handleSort = (e) => {
    if(e.target.value === 'Alphabetically'){
      const sortedStocks = [...this.state.ogStocks].sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({ stocks: sortedStocks, sort: e.target.value })
    }else if(e.target.value === 'Price'){
      const sortedStocks = [...this.state.ogStocks].sort(function(a, b) {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      this.setState({ stocks: sortedStocks, sort: e.target.value })
    }
  }

  handleFilter = (e) => {
    const stockType = e.target.value
    const filteredStock = [...this.state.ogStocks].filter(stock => stock.type === stockType)
    this.setState({ stocks: filteredStock })
  }

  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort} handleFilter={this.handleFilter} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.stocks} handleStockClick={this.handleStockClick} />
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolio} handleStockClick={this.handleRemoveStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
