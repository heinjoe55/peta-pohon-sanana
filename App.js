import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EksekusiScreen from "./screens/EksekusiScreen";
import HomeScreen from "./screens/HomeScreen";
import RiwayatScreen from "./screens/RiwayatScreen";
import TambahScreen from "./screens/TambahScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tambah" component={TambahScreen} />
        <Stack.Screen name="Eksekusi" component={EksekusiScreen} />
        <Stack.Screen name="Riwayat" component={RiwayatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
