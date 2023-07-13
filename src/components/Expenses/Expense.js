import ExpensesFilter from "./ExpenseFIlter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredArray.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            location={expense.location}
            amount={expense.amount}
          ></ExpenseItem>
        );
      })}
    </div>
  );
};

export default Expense;
