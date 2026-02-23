import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";

interface pickerItem {
  label: string;
  value: string;
}

interface PickerItemProps {
  label: string;
  pickerItems: pickerItem[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export default function RatePicker({
  label,
  pickerItems,
  setSelectedValue,
  selectedValue,
}: PickerItemProps) {
  return (
    <View style={styles.container}>
      <View key={`${label}`} style={styles.itemWrapper}>
        <Text style={styles.label}>{label}</Text>

        <View style={styles.pickerContainer}>
          <Picker
            dropdownIconColor="#555"
            selectedValue={selectedValue}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
            }}
          >
            {pickerItems.map((item) => (
              <Picker.Item label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  itemWrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  pickerContainer: {
    borderWidth: 1.5,
    borderColor: "#D1D1D1",
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
    overflow: "hidden",
  },
});
