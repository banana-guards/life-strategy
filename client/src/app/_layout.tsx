import Feather from "@expo/vector-icons/Feather";
import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(login)" options={{ headerShown: false }} />

      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Life Strategy",
          headerLeft: () => (
            <Link href="/configuration">
              <View style={styles.iconConfiguration}>
                <Feather name="settings" size={20} color="black" />
              </View>
            </Link>
          ),
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen name="steps" options={{ headerShown: false }} />
      <Stack.Screen name="auth/google" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  iconConfiguration: {
    padding: 10,
  },
});
