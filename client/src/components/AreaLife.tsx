import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import { areaLifeKeys } from "@/src/types/areaLifeKeys";
import { StyleSheet, Text, TextInput, View } from "react-native";
import useLanguage from "../hooks/useLanguage";
import useStep4 from "../store/step4Storage";

interface QuestionItemProps {
  questionText: string;
  field: areaLifeKeys;
  value: string;
}

export default function AreaLife({
  questionText,
  field,
  value,
}: QuestionItemProps) {
  const i18n = useLanguage(en.areaLife, es.areaLife);

  const setField = useStep4((state) => state.setField);

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionText}</Text>

      <TextInput
        style={styles.input}
        placeholder={i18n.answer}
        placeholderTextColor="#999"
        onChangeText={(text) => setField(field, text)}
        value={value}
        maxLength={80}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#1E1E1E",
    textAlign: "justify",
    lineHeight: 22,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D1D1D1",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    height: 48,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#333",
  },
});
