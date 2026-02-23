import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useStep4 from "@/src/store/step4Storage";
import { areaLifeKeys } from "@/src/types/areaLifeKeys";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AreaLife from "../../components/AreaLife";
import InstructionText from "../../components/InstructionText";

export default function Step4() {
  const i18n = useLanguage(en.step4, es.step4);

  const areaLifeFields: areaLifeKeys[] = [
    "ImportantPerson",
    "Family",
    "Friendship",
    "PhysicalHealth",
    "Spirituality",
    "Community",
    "SocialParticipation",
    "Work",
    "Education",
    "Finances",
    "Hobbies",
    "OnlineEntertainment",
    "OfflineEntertainment",
    "PhysiologicalNeeds",
    "ActivitiesOfDailyLiving",
  ];

  const areasValues = areaLifeFields.map((field) => {
    return { field, value: useStep4((state) => state[field]) };
  });

  const areasLife = areasValues.map((area, index) => (
    <AreaLife
      key={area.field + index}
      field={area.field}
      questionText={i18n.areasLife[`areaLife${index}`]}
      value={area.value}
    />
  ));

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        <InstructionText instructionText={i18n.instruction} />
        {areasLife.map((elem) => elem)}
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
