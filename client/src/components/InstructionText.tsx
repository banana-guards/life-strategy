import { StyleSheet, Text } from "react-native";

interface QuestionTextProps {
  instructionText: string;
}

export default function QuestionText({ instructionText }: QuestionTextProps) {
  return <Text style={styles.instruction}>{instructionText}</Text>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  instruction: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "justify",
    lineHeight: 22,
  },
});
