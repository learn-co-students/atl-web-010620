import React from 'react';

const SearchBar = (props) => {

  return (
    <div>

      <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={props.sort === 'Alphabetically' ? true : null} onChange={props.handleSort}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={props.sort === 'Price' ? true : null} onChange={props.handleSort}/>
          Price
        </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
