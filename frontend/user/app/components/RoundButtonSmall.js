// imports do sistema
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

// nossos imports
import colors from "../config/colors";

function RoundButtonSmall(props) {
  return (
    <View>
      <Icon
        iconStyle={styles.button}
        name="info-circle"
        type="font-awesome"
        color={colors.ternary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    paddingTop: 25,
  },
});

export default RoundButtonSmall;
