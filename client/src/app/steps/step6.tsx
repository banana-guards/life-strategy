import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep6 from "@/src/store/step6Storage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../../components/QuestionInput";

export default function Step6() {
  const i18n = useLanguage(en.step6, es.step6);

  const answer1 = useStep6((state) => state.questions[0]);
  const answer2 = useStep6((state) => state.questions[1]);
  const answer3 = useStep6((state) => state.questions[2]);
  const answer4 = useStep6((state) => state.questions[3]);
  const answer5 = useStep6((state) => state.questions[4]);

  const setAnswer = useStep6((state) => state.setQuestion);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <QuestionInput
          questionText={i18n.questions.continueLife}
          answer={answer1}
          index={0}
          setAnswer={setAnswer}
          maxLength={170}
        />
        <QuestionInput
          questionText={i18n.questions.changePriorities}
          answer={answer2}
          index={1}
          setAnswer={setAnswer}
          maxLength={170}
        />
        <QuestionInput
          questionText={i18n.questions.areasDissatisfaction}
          answer={answer3}
          index={2}
          setAnswer={setAnswer}
          maxLength={170}
        />
        <QuestionInput
          questionText={i18n.questions.currentJobPurpose}
          answer={answer4}
          index={3}
          setAnswer={setAnswer}
          maxLength={100}
        />
        <QuestionInput
          questionText={i18n.questions.jobEngagement}
          answer={answer5}
          index={4}
          setAnswer={setAnswer}
          maxLength={60}
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
