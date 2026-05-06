import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peta Pohon ULP Sanana</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tambah")}
      >
        <Text style={styles.buttonText}>Tambah Pohon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Eksekusi")}
      >
        <Text style={styles.buttonText}>Eksekusi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Riwayat")}
      >
        <Text style={styles.buttonText}>Riwayat</Text>
      </TouchableOpacity>

      {/* TEST MARKER - HARUS MUNCUL */}
      <Text style={styles.versionText}>VERSION FINAL HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005BAC",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    marginBottom: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FFD100",
    padding: 15,
    width: 260,
    marginVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  versionText: {
    marginTop: 30,
    color: "#FFFFFF",
    fontSize: 12,
  },
});
