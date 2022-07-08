import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expensesContext";
import { useContext, useEffect, useState } from "react";
import { fetchExpense } from "../store/http";
import ActivityIcon from "../components/UI/ActivityIcon";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function AllExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function getExpenses() {
      setIsLoading(true);
      try {
        const expenses = await fetchExpense();
        expensesContext.setExpensesList(expenses);
      } catch (error) {
        setError("Could not fetch expense");
      }
      
      setIsLoading(false);
    }

    getExpenses();
  }, []);

  const expensesContext = useContext(ExpensesContext);

  function goBack() {
    setError(null);
  }
  if (error && !isLoading) {
    return <ErrorOverlay message={error} goBack={goBack} />;
  }

  if (isLoading) {
    return <ActivityIcon />;
  }

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
    />
  );
}

export default AllExpenses;
