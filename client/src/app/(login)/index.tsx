import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const i18n = useLanguage(en.Login, es.Login);

  const router = useRouter();

  useEffect(() => {
    const subscription = Linking.addEventListener("url", async ({ url }) => {
      const parsed = Linking.parse(url);

      const token = parsed.queryParams?.token;

      if (token && typeof token === "string") {
        await SecureStore.setItemAsync("token", token);
        router.replace("/(tabs)");
      }
    });

    return () => subscription.remove();
  }, []);

  const handleLoginButton = async () => {
    await WebBrowser.openBrowserAsync(
      "https://api.life-strategy.uk/auth/google",
    );
  };

  const openWhatsApp = async () => {
    const url = "https://wa.me/526181467962";

    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      Alert.alert("Error", "WhatsApp no está instalado");
      return;
    }

    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Life Strategy</Text>

        <Pressable style={styles.login} onPress={handleLoginButton}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.loginText}>{i18n.googleLogin}</Text>
        </Pressable>

        <Pressable style={styles.contact} onPress={openWhatsApp}>
          <AntDesign name="whats-app" size={24} color="white" />
          <Text style={styles.contactText}>{i18n.contactMessage}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#1E1E1E",
    fontSize: 48,
    fontWeight: "700",
    marginBottom: 40,
    fontFamily: "Merriweather",
  },
  login: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    borderColor: "#7a7979",
    borderWidth: 1,
    width: "100%",
    maxWidth: 500,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "500",
  },
  contactText: {
    fontSize: 16,
    color: "#FFFF",
    fontWeight: "500",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#ff685a",
    maxWidth: 500,
    marginTop: 20,
  },
});
