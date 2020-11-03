// imports do sistema
import React from "react";
import { View, StyleSheet } from "react-native";

// nossos imports
import colors from "../config/colors";
import SwipeCard from "../components/SwipeCard";
import SwipeButtons from "../components/SwipeButtons";
import NavBar from "../components/NavBar";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      {/* BARRA DO TOPO */}
      <NavBar />

      {/* ÁREA ÚTIL */}
      <View style={styles.swipeArea}>
        {/* CARD */}
        <SwipeCard />

        {/* BOTÕES */}
        <SwipeButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.ezlight,
  },

  swipeArea: {
    height: "90%",
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
