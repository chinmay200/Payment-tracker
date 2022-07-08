import { View,ActivityIndicator, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/styles"


function ActivityIcon() {
  return (
    <View style = {styles.container}>
        <ActivityIndicator size="large" color={GlobalStyles.colors.primary100}/>
    </View>
  )
}

export default ActivityIcon

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:GlobalStyles.colors.secondry100
    }
})