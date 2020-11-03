// imports do sistema
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

// nossos imports
import colors from "../config/colors";

function RoundButton(props) {
  return (
    <View>
      <Icon
        iconStyle={styles.button}
        name="paw"
        type="font-awesome"
        raised
        reverse
        reverseColor={colors.light}
        color={props.color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
  },
});

export default RoundButton;
