import QuestionInput from "@/src/components/QuestionInput";
import Scales from "@/src/components/Scales";
import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep1 from "@/src/store/step1Storage";
import { Text } from "@react-navigation/elements";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Step1() {
  const i18n = useLanguage(en.step1, es.step1);

  const scales = useStep1((state) => state.scales);
  const setScale = useStep1((state) => state.setScale);

  const answer1 = useStep1((state) => state.questions[0]);
  const setAnswer = useStep1((state) => state.setQuestion);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View style={styles.container}>
          <QuestionInput
            hasIntroduction
            introText={i18n.introQuestion}
            questionText={i18n.question}
            answer={answer1}
            setAnswer={setAnswer}
            index={0}
            maxLength={300}
          />
          <Text style={styles.questionText}>{i18n.topicsQuestions}</Text>
          <View>
            {scales.map((value, i) => (
              <Scales
                key={`scale${i}`}
                title={i18n.topics[`topic${i + 1}`].title}
                description={i18n.topics[`topic${i + 1}`].description}
                value={value}
                setValue={(v) => setScale(i, v)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
  },
  container: {
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
  },
  questionText: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    textAlign: "justify",
    lineHeight: 22,
  },
});
