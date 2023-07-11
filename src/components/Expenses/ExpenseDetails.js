import "./ExpenseItem";
import React from 'react';

function ExpenseDetails(props) {
     
  const deleteHandler = () => {
    console.log("Clicked!!!")
  }

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ExpenseDetails;
