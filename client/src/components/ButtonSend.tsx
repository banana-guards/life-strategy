import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonSend() {
  return (
    <Pressable style={styles.button}>
      <Text>Enviar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: "auto",
    maxWidth: 160,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: "#DDDDDD",
  },
});
