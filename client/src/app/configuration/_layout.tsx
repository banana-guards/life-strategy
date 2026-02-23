import { Stack } from "expo-router";

export default function ConfigurationLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
    </Stack>
  );
}
