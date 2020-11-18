// imports do sistema
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

// nossos imports
import './global.css';
import GlobalStyles from "./app/config/GlobalStyles";
import HomeScreen from "./app/scenes/HomeScreen";
import Index from "./app/registerU/index";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
