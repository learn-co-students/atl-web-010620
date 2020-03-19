import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
      pizzas: [],
      pizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  handleUpdatePizza = (e) => {
    if(e.target.name === 'vegetarian'){
      this.setState({
        ...this.state,
        pizza: {
          ...this.state.pizza,
          vegetarian: true
        }
      })
    }else if(e.target.name === 'not vegetarian'){
      this.setState({
        ...this.state,
        pizza: {
          ...this.state.pizza,
          vegetarian: false
        }
      })
    }else{
      this.setState({
        ...this.state,
        pizza: {
          ...this.state.pizza,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  handleEditButton = (pizza) => {
    this.setState({ pizza: pizza })
  }

  handleSubmitForm = () => {
    fetch(`http://localhost:3000/pizzas/${this.state.pizza.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.pizza)
    })
    .then(res => res.json())
    .then(updatedPizza => {

      const pizzaList = [...this.state.pizzas].map(pizza => {
        if(pizza.id === updatedPizza.id){
          return updatedPizza
        }
        return pizza
      })

      this.setState({ pizzas: pizzaList, pizza: {} })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizza} handleUpdatePizza={this.handleUpdatePizza} handleSubmitForm={this.handleSubmitForm} />
        <PizzaList pizzas={this.state.pizzas} handleEditButton={this.handleEditButton} />
      </Fragment>
    );
  }
}

export default App;
