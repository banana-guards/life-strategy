import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep2 from "@/src/store/step2Storage";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InstructionText from "../../components/InstructionText";
import QuestionInput from "../../components/QuestionInput";
import RatePicker from "../../components/RatePiker";

export default function Step2() {
  const i18n = useLanguage(en.step2, es.step2);
  const goal = useStep2((state) => state.goal);
  const setGoal = useStep2((state) => state.setGoal);

  const answer1 = useStep2((state) => state.questions[0]);
  const answer2 = useStep2((state) => state.questions[1]);
  const answer3 = useStep2((state) => state.questions[2]);
  const answer4 = useStep2((state) => state.questions[3]);
  const answer5 = useStep2((state) => state.questions[4]);
  const setAnswer = useStep2((state) => state.setQuestion);

  const pickerItems = [];

  for (let index = 1; index < 18; index++) {
    pickerItems.push({
      label: i18n.goals[`goal${index}`],
      value: i18n.goals[`goal${index}`],
    });
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <QuestionInput
          questionText={i18n.questions.goodAt.question}
          answer={answer1}
          index={0}
          setAnswer={setAnswer}
          hasIntroduction={true}
          introText={i18n.questions.goodAt.introQuestion}
          maxLength={200}
        />
        <QuestionInput
          questionText={i18n.questions.worldNeed}
          answer={answer2}
          index={1}
          setAnswer={setAnswer}
          maxLength={30}
        />
        <QuestionInput
          questionText={i18n.questions.excitesUs}
          answer={answer3}
          index={2}
          setAnswer={setAnswer}
          maxLength={30}
        />
        <InstructionText instructionText={i18n.instruction} />

        <RatePicker
          label={i18n.sustainableGoalsLabel}
          pickerItems={pickerItems}
          selectedValue={goal}
          setSelectedValue={setGoal}
        />

        <QuestionInput
          questionText={i18n.questions.askFriends}
          answer={answer4}
          index={3}
          setAnswer={setAnswer}
          maxLength={100}
        />
        <QuestionInput
          questionText={i18n.questions.purpose}
          answer={answer5}
          index={4}
          setAnswer={setAnswer}
          maxLength={200}
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
