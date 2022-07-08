import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";
import { fetchExpense } from "../store/http";
import ActivityIcon from "../components/UI/ActivityIcon";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);

      try {
        const expenses = await fetchExpense();
        expensesContext.setExpensesList(expenses);
      } catch (error) {
        setError('Could not fetch data')
      }
      setIsLoading(false);
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const days = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    return days < expense.date && expense.date <= today;
  });

  function goBack(){
    setError(null)
  }

  if(error && !isLoading){
    return <ErrorOverlay message={error} goBack={goBack} />;
  
  }

  if (isLoading) {
    return <ActivityIcon />;
  }
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7days" />
  );
}

export default RecentExpenses;
