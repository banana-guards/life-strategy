import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import { Stack } from "expo-router";

export default function StepsLayout() {
  const i18n = useLanguage(en.headerTitles, es.headerTitles);

  return (
    <Stack>
      <Stack.Screen
        name="step1"
        options={{
          title: `${i18n.step1}`,
          headerStyle: { backgroundColor: "#f7f382" },
        }}
      />
      <Stack.Screen
        name="step2"
        options={{
          title: `${i18n.step2}`,
          headerStyle: { backgroundColor: "#82f7eb" },
        }}
      />
      <Stack.Screen
        name="step3"
        options={{
          title: `${i18n.step3}`,
          headerStyle: { backgroundColor: "#eeac5d" },
        }}
      />
      <Stack.Screen
        name="step4"
        options={{
          title: `${i18n.step4}`,
          headerStyle: { backgroundColor: "#aeffda" },
        }}
      />
      <Stack.Screen
        name="step5"
        options={{
          title: `${i18n.step5}`,
          headerStyle: { backgroundColor: "#f9b9d3" },
        }}
      />
      <Stack.Screen
        name="step6"
        options={{
          title: `${i18n.step6}`,
          headerStyle: { backgroundColor: "#82d2f7" },
        }}
      />
      <Stack.Screen
        name="step7"
        options={{
          title: `${i18n.step7}`,
          headerStyle: { backgroundColor: "#696ddf" },
        }}
      />
    </Stack>
  );
}
