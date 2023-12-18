import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450.65,
      date: new Date(2022, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((i) => i.id !== id));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpense} />;
    </div>
  );
};

export default App;
