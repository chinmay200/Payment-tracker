import axios from "axios";

export default async function storeExpense(data) {
  const res = await axios.post(
    "https://react-native-expense-app-3a798-default-rtdb.firebaseio.com/expenses.json",
    data
  );

  return res.data.name;
}

export async function fetchExpense() {
  const expenseData = await axios.get(
    "https://react-native-expense-app-3a798-default-rtdb.firebaseio.com/expenses.json"
  );

  const expense = [];

  for (const key in expenseData.data) {
    const expenseObj = {
      id: key,
      amount: expenseData.data[key].amount,
      date: new Date(expenseData.data[key].date),
      description: expenseData.data[key].description,
    };

    expense.push(expenseObj);
  }

  return expense;
}

export function updateExpenseItem(id, expenseData) {
  return axios.put(
    `https://react-native-expense-app-3a798-default-rtdb.firebaseio.com/expenses/${id}.json`,
    expenseData
  );
}

export function deleteExpenseItem(id) {
  return axios.delete(
    `https://react-native-expense-app-3a798-default-rtdb.firebaseio.com/expenses/${id}.json`
  );
}
