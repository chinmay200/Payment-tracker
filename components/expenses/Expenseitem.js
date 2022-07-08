import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function getFormattedDate(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function Expenseitem({ id , description, date, amount,onPress }) {
  const navigation = useNavigation();

  
  function expensePressHandler(){
    navigation.navigate("ManageExpenses" , {expenseId:id})
  }

  return (
    <Pressable onPress={expensePressHandler} style = {({pressed}) => pressed ? styles.pressed:null}>
      <View style={styles.container}>
        <View>
          <Text style={styles.detailText}>{description}</Text>
          <Text style={styles.detailText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.expenseContainer}>
          <Text style={styles.expense}>₹{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Expenseitem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 5,
    marginHorizontal: 19,
    backgroundColor: GlobalStyles.colors.font200,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },

  detailText: {
    fontSize: 17,
  },

  expenseContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.primary100,
    justifyContent: "center",
    borderRadius: 5,
    minWidth: 80,
  },

  expense: {
    fontSize: 15,
    color: GlobalStyles.colors.lifont200,
    textAlign: "center",
  },

  pressed: {
    opacity: 0.7,
  },
});
