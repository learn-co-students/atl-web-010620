import React from "react"

const PizzaForm = (props) => {

  const { topping, size, vegetarian } = props.pizza
  const handleUpdatePizza = props.handleUpdatePizza

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" onChange={handleUpdatePizza} className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                topping
              }/>
        </div>
        <div className="col">
          <select value={size} name="size" onChange={handleUpdatePizza} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={handleUpdatePizza} type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="not vegetarian" onChange={handleUpdatePizza} type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handleSubmitForm}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
