import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={(pressed) => (pressed ? styles.pressed : null)}
    >
      <View style= {styles.buttonContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 8,
    marginHorizontal:"10%",
  },
  pressed: {
    opacity: 0.7,
  },
});
