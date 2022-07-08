import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensesPeriod }) {
  let content = <Text style={styles.fallBackText}>No expenses to show</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.secondry100,
    paddingBottom: 5,
  },

  fallBackText: {
    marginTop:"50%",
    fontSize: 22,
    color: GlobalStyles.colors.primary200,
    textAlign: "center",
  },
});
