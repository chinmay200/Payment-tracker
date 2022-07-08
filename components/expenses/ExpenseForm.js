import { View, StyleSheet, Alert, Text } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({
  deleteExpense,
  confirmHandler,
  cancelHandler,
  isExpense,
  selectedExpense,
}) {
  const [inputs, setinputs] = useState({
    amount: {
      value: selectedExpense ? selectedExpense.amount.toString() : "",
      isValid: !!selectedExpense,
    },
    description: {
      value: selectedExpense ? selectedExpense.description.toString() : "",
      isValid: !!selectedExpense,
    },
    date: {
      value: selectedExpense
        ? selectedExpense.date.toISOString().slice(0, 10)
        : "",
      isValid: !!selectedExpense,
    },
  });

  function inputHandler(indentifier, enteredValue) {
    setinputs((currentValues) => {
      return {
        ...currentValues,
        [indentifier]: { value: enteredValue, isValid: true },
      };
    });
  }


  function submitHandler() {
    const data = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(data.amount) && data.amount > 0;
    const dateIsValid = new Date(data.date).toString() !== "Invalid Date";
    const descriptionIsValid = data.description.trim().length > 0;

    if (amountIsValid && dateIsValid && descriptionIsValid) {
      confirmHandler(data);
    } else {
      setinputs((currentValues) => {
        return {
          amount: { value: currentValues.amount.value, isValid: amountIsValid },
          date: { value: currentValues.date.value, isValid: dateIsValid },
          description: {
            value: currentValues.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      
      return;
    }
  }

  const formIsNotValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
  return (
    <View style={styles.container}>
      <Input
        label={"Amount"}
        textConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputHandler.bind(this, "amount"),
          placeholder: "eg.20.19",
          value: inputs.amount.value,
        }}
        isValid = {inputs.amount.isValid}
      />
      <Input
        label={"Description"}
        textConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "description"),
          placeholder: "eg.Pair of shoes",
          value: inputs.description.value,
        }}
        isValid = {inputs.description.isValid}
      />
      <Input
        label={"Date"}
        textConfig={{
          keyboardType:"decimal-pad",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputHandler.bind(this, "date"),
          value: inputs.date.value,
        }}
        isValid = {inputs.date.isValid}
      />
      {formIsNotValid && <Text style = {styles.errorMessage}>Invalid inputs please enter valid input</Text>}
      <View style={styles.buttonsContainer}>
        <Button onPress={cancelHandler}>Cancel</Button>
        <Button onPress={submitHandler}>{isExpense ? "Update" : "Add"}</Button>
      </View>
      {isExpense && (
        <View style={styles.buttonContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.primary200}
            size={30}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.secondry200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    alignItems: "center",
  },

  buttonsContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  errorMessage:{
    color:GlobalStyles.colors.lifont100,
    fontSize:18
  }

});
