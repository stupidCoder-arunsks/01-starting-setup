import "./ExpenseForm.css";

const ExpenseForm = () => {
  const onChangeTitleHandler = (event) => {
    console.log(event);
    console.log("event value ", event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" onChange={onChangeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input type="number" min="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input type="date" min="2023-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
