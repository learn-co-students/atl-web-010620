import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    offset: 0,
    eatSushi: [],
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  handleMoreBtn = () => {
    if(this.state.offset + 4 >= this.state.sushis.length){
      this.setState({ offset: 0 })
    }else{
      this.setState({ offset: this.state.offset + 4 })
    }
  }

  handleEatSushi = (sushi) => {
    const eaten = this.state.eatSushi.filter(eatenSushi => eatenSushi.id === sushi.id).length > 0 ? true : false
    const enoughMoney = this.state.wallet >= sushi.price ? true : false
    if(!eaten && enoughMoney){
        this.setState({ eatSushi: [...this.state.eatSushi, sushi], wallet: this.state.wallet-sushi.price})
    }else{
      alert('You either broke or you already ate! 🍣')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleEatSushi={this.handleEatSushi}
            sushis={this.state.sushis}
              offset={this.state.offset}
                handleMoreBtn={this.handleMoreBtn}
                  eatSushi={this.state.eatSushi} />
        <Table
          eatSushi={this.state.eatSushi}
            wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;
