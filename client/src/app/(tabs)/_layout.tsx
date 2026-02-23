import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import stylesGlobal from "@/src/styles/stylesGlobal";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
  const i18n = useLanguage(en.tab, es.tab);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: stylesGlobal.orangeTheme.color,
        tabBarInactiveTintColor: "#A0A0A0",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
        tabBarStyle: {
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: `${i18n.test}`,
          tabBarIcon: ({ color }) => (
            <View style={styles.containerIcon}>
              <MaterialCommunityIcons
                name="test-tube"
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: `${i18n.saved}`,
          tabBarIcon: ({ color }) => (
            <View style={styles.containerIcon}>
              <FontAwesome name="save" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    flex: 1,
    width: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
