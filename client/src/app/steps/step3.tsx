import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep3 from "@/src/store/step3Storage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../../components/QuestionInput";

export default function Step3() {
  const i18n = useLanguage(en.step3, es.step3);

  const answer1 = useStep3((state) => state.questions[0]);
  const answer2 = useStep3((state) => state.questions[1]);
  const answer3 = useStep3((state) => state.questions[2]);
  const answer4 = useStep3((state) => state.questions[3]);

  const setAnswer = useStep3((state) => state.setQuestion);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <QuestionInput
          questionText={i18n.questions.visualize}
          answer={answer1}
          setAnswer={setAnswer}
          index={0}
          maxLength={200}
        />
        <QuestionInput
          questionText={i18n.questions.story}
          answer={answer2}
          setAnswer={setAnswer}
          index={1}
          maxLength={130}
        />
        <QuestionInput
          questionText={i18n.questions.money}
          answer={answer3}
          setAnswer={setAnswer}
          index={2}
          maxLength={130}
        />
        <QuestionInput
          questionText={i18n.questions.oldMe}
          answer={answer4}
          setAnswer={setAnswer}
          index={3}
          maxLength={250}
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
