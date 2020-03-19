import React from "react"

const Pizza = (props) => {

  const { topping, size, vegetarian } = props.pizza

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{ vegetarian ? "Vegetarian" : "Not Vegetarian" }</td>
      <td>
        <button type="button" onClick={() => props.handleEditButton(props.pizza) } className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  )
}

export default Pizza
