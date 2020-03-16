import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import HogContainer from './HogContainer';

class App extends Component {

  state = {
    ogHogs: [],
    hogs: []
  }

  componentDidMount(){
    const newHogs = [...hogs].map(hog => {
      return {
        ...hog,
        showDetails: false
      }
    })
    this.setState({ ogHogs: newHogs, hogs: hogs })
  }

  handleCardClick = (clickedHog) => {
    const hogs = [...this.state.ogHogs].map(hog => {
        if(hog.name === clickedHog.name){
          return {
            ...clickedHog,
            showDetails: !clickedHog.showDetails
          }
        }else{
          return hog
        }
      })
      this.setState({ ogHogs: hogs })
  }

  handleButtons = (e) => {

    if(e.target.id === 'all'){
      this.setState({ ogHogs: this.state.hogs })
    }else if(e.target.id === 'filter'){

      const statehogs = [...this.state.ogHogs].filter(hog => hog.greased)
      this.setState({ ogHogs: statehogs })

    }else if(e.target.id === 'name'){

      const sortedHogs = [...this.state.ogHogs].sort(function(a, b) {
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
      this.setState({ ogHogs: sortedHogs })

    }else if(e.target.id === 'weight'){

      const sortedHogs = [...this.state.ogHogs].sort(function (a, b) {
        return a.weight - b.weight;
      })
      this.setState({ ogHogs: sortedHogs })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav handleButtons={this.handleButtons} />

        <HogContainer
          hogs={this.state.ogHogs}
            handleCardClick={this.handleCardClick} />
      </div>
    );
  }
}

export default App;
