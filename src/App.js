import "./components/Expenses/Expenses.css";
import NewExpense from "./components/newExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurance",
    location: "dubaii",
    amount: 2000,
    date: new Date(2023, 6, 10),
  },
  {
    id: "e2",
    title: "BlueTooth speaker",
    location: "india",
    amount: 3000,
    date: new Date(2023, 6, 9),
  },
  {
    id: "e3",
    title: "Mobile Phone",
    location: "france",
    amount: 4000,
    date: new Date(2023, 5, 10),
  },
  {
    id: "e4",
    title: "Game caste",
    location: "australia",
    amount: 5000,
    date: new Date(2023, 4, 14),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (expense) => {
    setExpenses(previousExpense => {
      return [expense,...previousExpense]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}> </NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
