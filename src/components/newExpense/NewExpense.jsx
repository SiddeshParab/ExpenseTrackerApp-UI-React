import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    setFormOpen(false);
    const expenseData = { ...enteredExpenseData, id: Date.now() };
    props.onAddExpense(expenseData);
  };

  let formContent = (
    <button onClick={() => setFormOpen(true)}>Add Expense</button>
  );

  if (formOpen) {
    formContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
