import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useLanguageStore from "../store/languageStore";
import api from "../api/api";

interface ReportCardProps {
  title: string;
  date: string;
  _id: string;
}

export default function ReportCard({ title, date, _id }: ReportCardProps) {
  const lang = useLanguageStore((state) => state.lang);

  const url = `https://api.life-strategy.uk/report/pdf/${_id}/${lang}`;

  const handleGetPDF = async () => {
    const status = await api.get(
      `https://api.life-strategy.uk/report/status/${_id}`,
    );
    if (status.data.status === "processing") {
      Alert.alert(
        "Reporte en proceso",
        "Tu reporte aún se está generando. Por favor, inténtalo de nuevo más tarde.",
      );
    } else {
      Alert.alert("Abrir PDF", "¿Cómo quieres abrir el reporte?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Abrir", onPress: () => Linking.openURL(url) },
      ]);
    }
  };

  return (
    <View style={styles.reportItem}>
      <Pressable style={styles.reportInfo} onPress={handleGetPDF}>
        <Text style={styles.reportDate}>{date}</Text>
        <Text style={styles.reportName}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  reportItem: {
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  reportInfo: {
    flexDirection: "column",
  },
  reportDate: {
    fontSize: 13,
    color: "#7A7A7A",
    marginBottom: 2,
  },
  reportName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E1E1E",
  },
});
