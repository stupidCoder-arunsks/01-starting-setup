import "./ExpenseItem";
import React, {useState} from 'react';

function ExpenseDetails(props) {
  
  const [title,setTitle] = useState(props.title)

  const reNameTitleHandler = () => {
    setTitle('Updated!!!')
  }

  const deleteHandler = () => {
    // title = 'Updated!!!'
    // console.log(title)
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={reNameTitleHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default ExpenseDetails;
