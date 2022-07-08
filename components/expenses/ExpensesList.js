import { FlatList } from "react-native";
import Expenseitem from "./Expenseitem";
function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return (
      <Expenseitem
        description={itemData.item.description}
        date={itemData.item.date}
        amount={itemData.item.amount}
        onPress = {()=>{}}
        id={itemData.item.id}
      />
    );
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
