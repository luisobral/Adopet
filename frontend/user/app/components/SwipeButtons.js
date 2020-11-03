// imports do sistema
import React from "react";
import { View, StyleSheet } from "react-native";

// nossos imports
import colors from "../config/colors";
import RoundButton from "../components/RoundButton";
import RoundButtonSmall from "../components/RoundButtonSmall";

function SwipeButtons(props) {
  return (
    <View style={styles.buttonArea}>
      <RoundButton color={colors.cancel} />
      <RoundButtonSmall color={colors.ternary} />
      <RoundButton color={colors.confirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonArea: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "flex-end",
    paddingTop: 10,
  },
});

export default SwipeButtons;
