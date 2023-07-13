import "./components/Expenses/Expenses.css";
import NewExpense from "./components/newExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import { useState } from "react";

function App() {
  const expenses = [
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

  const [expenseData, setExpenseData] = useState(expenses);

  const onAddExpenseHandler = (expense) => {
    const newExpenseData = [...expenses, expense];
    setExpenseData(newExpenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}> </NewExpense>
      <Expense expenses={expenseData}></Expense>
    </div>
  );
}

export default App;
