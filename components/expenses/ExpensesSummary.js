import {View ,Text , StyleSheet} from 'react-native'
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  } , 0);

  return (
    <View style = {styles.container}>
      <Text style = {styles.expensePeriod}>{periodName}</Text>
      <Text style = {styles.sum}> ₹{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:50,
    paddingVertical:10,
    backgroundColor:GlobalStyles.colors.primary100,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    marginBottom:5
  },

  expensePeriod:{
    fontSize:16,
    color:GlobalStyles.colors.lifont100,
  },

  sum:{
    fontSize:20,
    fontWeight:'700',
    color:GlobalStyles.colors.lifont200,
  }
})
