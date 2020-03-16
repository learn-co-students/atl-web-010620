import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <button onClick={props.handleButtons} id="all"> All </button>
        <button onClick={props.handleButtons} id="filter"> Filter </button>
        <button onClick={props.handleButtons} id="name"> Sort by name </button>
        <button onClick={props.handleButtons} id="weight"> Sort by weight </button>
      </div>
    </div>
  );
};

export default Nav;
