import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useLanguageStore from "@/src/store/languageStore";
import { Picker } from "@react-native-picker/picker";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export default function Configuration() {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const selectedLanguage = useLanguageStore((state) => state.lang);

  const i18n = useLanguage(en.configurations, es.configurations);

  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync("token");
    router.navigate("..");
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{i18n.selectedLanguage}</Text>
        <Picker
          style={styles.selectedOption}
          dropdownIconColor="rgba(78, 78, 74, 1)"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label={i18n.englishOption} value="en" />
          <Picker.Item label={i18n.spanishOption} value="es" />
        </Picker>
      </View>
      <Pressable style={styles.cardContainer} onPress={handleLogOut}>
        <Text style={styles.title}>{i18n.logOut}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    justifyContent: "center",
    padding: 18,
    borderColor: "#E4E4E4",
    borderBottomWidth: 2,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  selectedOption: {
    fontSize: 15,
    fontWeight: "500",
    color: "#555555cc",
  },
});
