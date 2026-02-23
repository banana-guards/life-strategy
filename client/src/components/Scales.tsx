import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ScalesProps {
  title: string;
  description: string;
  value: number;
  setValue: (value: number) => void;
}

export default function Scales({
  title,
  description,
  value,
  setValue,
}: ScalesProps) {
  const dec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const inc = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.scaleContainer}>
        <Pressable
          onPress={dec}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#c5c4c4" : "#E0E0E0" },
          ]}
        >
          <AntDesign name="minus" size={18} color="#333" />
        </Pressable>

        <Text style={styles.value}>{value}</Text>

        <Pressable
          onPress={inc}
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? "#c5c4c4" : "#E0E0E0" },
          ]}
        >
          <AntDesign name="plus" size={18} color="#333" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  description: {
    fontSize: 13,
    color: "#6B6B6B",
    marginTop: 4,
    lineHeight: 18,
  },
  scaleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#E0E0E0",
  },
  value: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2E2E2E",
    minWidth: 28,
    textAlign: "center",
  },
});
