import { Pressable, StyleSheet } from "react-native";
import { View ,Text} from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({children , onPress}) {
  return (
    <View style={styles.button}>
      <Pressable onPress={onPress} style ={({pressed}) => pressed && styles.pressed}>
        <View >
          <Text style = {styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius:4,
        backgroundColor:GlobalStyles.colors.lifont200,
        paddingHorizontal:13,
        paddingVertical:4,
        minWidth:"20%"
    },

    buttonText:{
        color:GlobalStyles.colors.primary200,
        textAlign:"center",
        fontSize:19
    },

    pressed:{
        opacity:0.7,
        // backgroundColor:GlobalStyles.colors.primary200,
    }
})
