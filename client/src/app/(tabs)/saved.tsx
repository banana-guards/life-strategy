import api from "@/src/api/api";
import useLanguage from "@/src/hooks/useLanguage";
import en from "@/src/i18n/en.json";
import es from "@/src/i18n/es.json";
import useLanguageStore from "@/src/store/languageStore";
import { collectAllSteps } from "@/src/utils/collectAllSteps";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ReportCard from "../../components/ReportCard";

interface Report {
  title: string;
  dateGenerated: string;
  _id: string;
}

export default function Saved() {
  const i18n = useLanguage(en.saved, es.saved);
  const lang = useLanguageStore((state) => state.lang);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await api.get("/report/");
        setReports(response.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchReports();
  }, [toggleRefresh]);

  const handleGenerateReport = async () => {
    try {
      const request = collectAllSteps();
      await api.post(`/report/${lang}`, request);
      setToggleRefresh(!toggleRefresh);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>{i18n.description}</Text>
          </View>

          <Image
            source={require("@/assets/images/man-learning.svg")}
            style={styles.image}
            contentFit="contain"
          />
        </View>

        <Text style={styles.details}>{i18n.details}</Text>

        <Pressable
          onPress={handleGenerateReport}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>{i18n.reportButton}</Text>
        </Pressable>
      </View>

      <Text style={styles.reportTitle}>{i18n.reportTitle}</Text>

      <ScrollView contentContainerStyle={styles.reportSection}>
        {reports.map((report) => (
          <ReportCard
            key={report._id}
            title={report.title}
            date={report.dateGenerated}
            _id={report._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  card: {
    borderColor: "#E4E4E4",
    borderBottomWidth: 2,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#E4E4E4",
    paddingBottom: 12,
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  description: {
    fontSize: 16,
    color: "#1E1E1E",
    fontWeight: "600",
    lineHeight: 22,
  },
  image: {
    width: 110,
    height: 110,
  },
  details: {
    fontSize: 15,
    color: "#4A4A4A",
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#ff685a",
    color: "#1E1E1E",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  reportSection: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 6,
    marginRight: "auto",
    marginTop: 12,
  },
});
