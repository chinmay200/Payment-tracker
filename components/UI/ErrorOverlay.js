
import {View , StyleSheet , Text} from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import Button from './Button'

function ErrorOverlay({message , goBack}) {

    return (
      <View style = {styles.container}>
          <Text style = {styles.errorTitle}>An error has occured</Text>
          <Text style = {styles.errorMessage}>{message}</Text>
          <Button onPress={goBack}>Go back</Button>
      </View>
    )
  }
  
  export default ErrorOverlay
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:GlobalStyles.colors.secondry100
      },

      errorTitle:{
        color:GlobalStyles.colors.primary100,
        fontSize:22,
        fontWeight:"bold",
      },

      errorMessage:{
        alignItems:"center",
        color:GlobalStyles.colors.primary200,
      }
  })