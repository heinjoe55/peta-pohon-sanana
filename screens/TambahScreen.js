import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function TambahScreen({ navigation }) {
  const [formData, setFormData] = useState({
    namaJenis: "",
    lokasi: "",
    kondisi: "Baik",
    status: "Baru",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSimpan = () => {
    // TODO: Simpan data ke database
    console.log("Data disimpan:", formData);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tambah Pohon Baru</Text>

      {/* Jenis Pohon */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Jenis Pohon</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan jenis pohon"
          value={formData.namaJenis}
          onChangeText={(value) => handleInputChange("namaJenis", value)}
          placeholderTextColor="#999"
        />
      </View>

      {/* Lokasi */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Lokasi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan lokasi"
          value={formData.lokasi}
          onChangeText={(value) => handleInputChange("lokasi", value)}
          placeholderTextColor="#999"
        />
      </View>

      {/* Kondisi */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Kondisi</Text>
        <View style={styles.radioGroup}>
          {["Baik", "Sedang", "Buruk"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.radioButton}
              onPress={() => handleInputChange("kondisi", item)}
            >
              <View
                style={[
                  styles.radioCircle,
                  formData.kondisi === item && styles.radioCircleActive,
                ]}
              />
              <Text style={styles.radioText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Status */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Status</Text>
        <View style={styles.radioGroup}>
          {["Baru", "Eksekusi", "Selesai"].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.radioButton}
              onPress={() => handleInputChange("status", item)}
            >
              <View
                style={[
                  styles.radioCircle,
                  formData.status === item && styles.radioCircleActive,
                ]}
              />
              <Text style={styles.radioText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.buttonCancel]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonCancelText}>Batal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSimpan]}
          onPress={handleSimpan}
        >
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#005BAC",
    marginBottom: 30,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#333",
  },
  radioGroup: {
    flexDirection: "row",
    gap: 15,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  radioCircleActive: {
    backgroundColor: "#FFD100",
    borderColor: "#FFD100",
  },
  radioText: {
    fontSize: 14,
    color: "#333",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonCancel: {
    backgroundColor: "#ddd",
  },
  buttonCancelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  buttonSimpan: {
    backgroundColor: "#FFD100",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
