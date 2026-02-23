import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep7 from "@/src/store/step7Storage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuestionInput from "../../components/QuestionInput";

export default function Step7() {
  const i18n = useLanguage(en.step7, es.step7);

  const answer1 = useStep7((state) => state.questions[0]);
  const answer2 = useStep7((state) => state.questions[1]);
  const answer3 = useStep7((state) => state.questions[2]);
  const answer4 = useStep7((state) => state.questions[3]);

  const setAnswer = useStep7((state) => state.setQuestion);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <QuestionInput
          questionText={i18n.questions.defineGoal}
          answer={answer1}
          setAnswer={setAnswer}
          index={0}
          maxLength={200}
        />
        <QuestionInput
          questionText={i18n.questions.sharePlan}
          answer={answer2}
          setAnswer={setAnswer}
          index={1}
          maxLength={50}
        />
        <QuestionInput
          questionText={i18n.questions.rewardConsequences}
          answer={answer3}
          setAnswer={setAnswer}
          index={2}
          maxLength={60}
        />
        <QuestionInput
          questionText={i18n.questions.weeklyReview}
          answer={answer4}
          setAnswer={setAnswer}
          index={3}
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
