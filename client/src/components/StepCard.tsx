import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface StepsProps {
  title: string;
  question: string;
  imageSource: string;
  i: number;
}

interface StepCardProps {
  step: StepsProps;
}

export default function StepCard({ step }: StepCardProps) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.stepContainer}
      onPress={() => router.push(`/steps/step${step.i + 1}` as any)}
    >
      <Image style={styles.imageContainer} source={step.imageSource} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.description}>{step.question}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  stepContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  description: {
    fontSize: 13,
    color: "#2d2d34",
    fontWeight: "600",
  },
  title: {
    fontSize: 23,
    color: "#0000",
    fontFamily: "Merriweather",
  },
  imageContainer: {
    height: 140,
    aspectRatio: 1 / 1,
    borderTopStartRadius: 7,
    borderBottomStartRadius: 7,
  },
  descriptionContainer: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    elevation: 4,
    backgroundColor: "#fff",
    borderTopEndRadius: 7,
    borderBottomEndRadius: 7,
    height: 140,
    paddingHorizontal: 6,
  },
});
