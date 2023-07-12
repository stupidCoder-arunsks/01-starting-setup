import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expense = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
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
