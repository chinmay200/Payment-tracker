import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { ExpensesContext } from "../store/expensesContext";
import ExpenseForm from "../components/expenses/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import storeExpense, {
  deleteExpenseItem,
  updateExpenseItem,
} from "../store/http";
import ActivityIcon from "../components/UI/ActivityIcon";

function ManageExpenses({ route }) {
  const navigation = useNavigation();
  const expenseId = route.params?.expenseId;
  const isExpense = !!expenseId;
  const [isProcessing, setIsProcessing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExpense ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isExpense]);

  const expensesContext = useContext(ExpensesContext);
  const selectedExpense = expensesContext.expenses.find(
    (expense) => expense.id === expenseId
  );

  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(data) {
    setIsProcessing(true);
    if (isExpense) {
      const expense = {
        description: data.description,
        amount: data.amount,
        date: data.date,
      };
      expensesContext.updateExpense(expenseId, expense);
      await updateExpenseItem(expenseId, expense);
    } else {
      const expense = {
        description: data.description,
        amount: data.amount,
        date: data.date,
      };
      const id = await storeExpense(expense);
      expensesContext.addExpense({ ...expense, id: id });
    }

    navigation.goBack();
  }

  async function deleteExpense() {
    expensesContext.deleteExpense(expenseId);
    setIsProcessing(true);
    await deleteExpenseItem(expenseId);
    navigation.goBack();
  }

  if (isProcessing) {
    return <ActivityIcon />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        deleteExpense={deleteExpense}
        cancelHandler={cancelHandler}
        confirmHandler={confirmHandler}
        isExpense={isExpense}
        selectedExpense={selectedExpense}
      />
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.secondry200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
