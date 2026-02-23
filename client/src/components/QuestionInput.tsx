import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import { StyleSheet, Text, TextInput, View } from "react-native";
import useLanguage from "../hooks/useLanguage";

interface QuestionItemProps {
  introText?: string;
  questionText: string;
  hasIntroduction?: boolean;
  answer: string;
  setAnswer: (text: string, index: number) => void;
  index: number;
  maxLength: number;
}

export default function QuestionInput({
  introText,
  questionText,
  hasIntroduction = false,
  answer,
  setAnswer,
  index,
  maxLength,
}: QuestionItemProps) {
  const i18n = useLanguage(en.questionInput, es.questionInput);

  const handleChange = (e: any) => {
    setAnswer(e.nativeEvent.text, index);
  };

  return (
    <View style={styles.container}>
      {hasIntroduction && <Text style={styles.introText}>{introText}</Text>}

      <Text style={styles.questionText}>{questionText}</Text>

      <TextInput
        editable
        multiline
        numberOfLines={6}
        underlineColorAndroid="transparent"
        maxLength={maxLength}
        placeholder={i18n.answer}
        placeholderTextColor="#999"
        style={styles.input}
        onChange={handleChange}
        value={answer}
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
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  introText: {
    fontSize: 15,
    marginBottom: 8,
    textAlign: "justify",
    color: "#4A4A4A",
    lineHeight: 20,
  },
  questionText: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "justify",
    lineHeight: 22,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D1D1D1",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    padding: 10,
    height: 110,
    textAlignVertical: "top",
    fontSize: 16,
    color: "#333",
  },
});
