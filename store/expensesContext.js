import { createContext, useState } from "react";

export const ExpensesContext = createContext();

function ExpenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  function setExpensesList(expenses) {
    setExpenses(expenses);
  }

  function addExpense(expense) {
    const newExpense = {
      id: expense.id,
      description: expense.description,
      amount: expense.amount,
      date: expense.date,
    };

    setExpenses((prevExpense) => [newExpense, ...prevExpense]);
  }

  function deleteExpense(id) {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses([...newExpenses]);
  }

  function updateExpense(id, { description, amount, date }) {
    let updateIndex = -1;
    for (let i = 0; i < expenses.length; i++) {
      const element = expenses[i];
      if (id === element.id) {
        updateIndex = i;
        break;
      }
    }
    const updatedExpense = {
      id: id,
      description: description,
      amount: amount,
      date: date,
    };

    const updatedExpenseList = [...expenses];

    updatedExpenseList[updateIndex] = updatedExpense;
    setExpenses([...updatedExpenseList]);
  }

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    setExpensesList: setExpensesList,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
