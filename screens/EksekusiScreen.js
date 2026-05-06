import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EksekusiScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eksekusi Pohon</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ambil Foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#FFD100",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 16,
  },
});
