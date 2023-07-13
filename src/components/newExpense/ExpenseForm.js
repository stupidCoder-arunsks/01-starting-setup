import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation,setEntertedLocation] = useState("")

  const onChangeLocationHandler = (event) => {
    setEntertedLocation(event.target.value)
  }

  const onChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onChangeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation
    };
    
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEntertedLocation("")
  };

  // console.log(enteredTitle, enteredAmount, enteredDate);

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={onChangeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={onChangeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={onChangeDateHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location:</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={onChangeLocationHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
