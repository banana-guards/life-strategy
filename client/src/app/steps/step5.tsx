import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep5 from "@/src/store/step5Storage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../../components/QuestionInput";

export default function Step5() {
  const i18n = useLanguage(en.step5, es.step5);

  const answer1 = useStep5((state) => state.questions[0]);
  const setAnswer = useStep5((state) => state.setQuestion);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <QuestionInput
          questionText={i18n.question}
          answer={answer1}
          setAnswer={setAnswer}
          index={0}
          maxLength={500}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  safeView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },
});
