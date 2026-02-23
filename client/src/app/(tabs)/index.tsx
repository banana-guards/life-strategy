import StepCard from "@/src/components/StepCard";
import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Test() {
  const i18n = useLanguage(en.test, es.test);

  const stepsImages = [
    require("@/assets/images/steps/1.svg"),
    require("@/assets/images/steps/2.svg"),
    require("@/assets/images/steps/3.svg"),
    require("@/assets/images/steps/4.svg"),
    require("@/assets/images/steps/5.svg"),
    require("@/assets/images/steps/6.svg"),
    require("@/assets/images/steps/7.svg"),
  ];

  const StepsCards = [];

  for (let index = 0; index < 7; index++) {
    const title = `title${index + 1}`;
    const question = `question${index + 1}`;
    StepsCards.push(
      <StepCard
        key={index}
        step={{
          title: `${i18n[title]}`,
          question: `${i18n[question]}`,
          i: index,
          imageSource: stepsImages[index],
        }}
      />
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>{StepsCards.map((elem) => elem)}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 22,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
