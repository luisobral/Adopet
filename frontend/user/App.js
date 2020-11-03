// imports do sistema
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

// nossos imports
import GlobalStyles from "./app/config/GlobalStyles";
import HomeScreen from "./app/scenes/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
