import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textConfig ,  isValid}) {

  let inputStyle = [styles.input]

  if(textConfig.multiline){
    inputStyle.push(styles.multiline)
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textConfig}
        style={isValid ? [styles.input] : [styles.input , styles.inputError]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 2,
    paddingVertical: 4,
    marginBottom:4
  },

  label: {
    fontSize: 22,
    color:GlobalStyles.colors.primary100,
    marginBottom:3,
  },
  input: {
    backgroundColor: GlobalStyles.colors.lifont200,
    paddingHorizontal: 6,
    paddingVertical:7,
    borderRadius: 3,
    fontSize:17,
    width:350,
  },

  inputError:{
    borderWidth:4,
    borderColor:GlobalStyles.colors.primary200
  },

  focused: {
    backgroundColor: GlobalStyles.colors.lifont200,
  },

  multiline:{
    minHeight:100,
    textAlignVertical:"top"
  }
});
