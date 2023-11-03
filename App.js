import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Quiz } from "./Screens/Quiz";

export default function App() {
  return (
    <View style={styles.container}>
      <Quiz />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#deb887",
    alignItems: "center",
    justifyContent: "center",
  },
});
