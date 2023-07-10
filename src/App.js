import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      <h2>Hello Let's get started!</h2>
      {expenses.map((expense) => {
        return <ExpenseItem
          title={expense.title}
          date={expense.date}
          location={expense.location}
          amount={expense.amount}
        ></ExpenseItem>;
      })}
    </div>
  );
}

export default App;
