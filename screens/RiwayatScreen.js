import { Text, View } from "react-native";

export default function RiwayatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Pekerjaan</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
};
