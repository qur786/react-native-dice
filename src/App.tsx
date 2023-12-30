import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Dice } from "./components/Dice";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Dice</Text>
      <View style={styles.diceContainer}>
        <Dice />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
  },
  diceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 24,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2F363F",
    marginTop: 32,
  },
});

export default App;
