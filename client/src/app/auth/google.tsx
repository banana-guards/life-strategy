import { useLocalSearchParams, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function GoogleCallback() {
  const router = useRouter();
  const { token } = useLocalSearchParams();

  useEffect(() => {
    if (token) {
      SecureStore.setItemAsync("token", String(token))
        .then(() => router.replace("/(tabs)"))
        .catch(console.error);
    }
  }, [token]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.loadingText}>Procesando login...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 25,
  },
});
