// imports do sistema
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";

// nossos imports
import colors from "../config/colors";

function SwipeCard(props) {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardPicture}>
        <Card.Image
          style={styles.cardPicture}
          source={require("../assets/placeholder_dog.jpg")}
        />
      </View>
      <View style={styles.cardText}>
        <Card.Title>LOREM IPSUM</Card.Title>
        <Text>4 meses. Machinho feliz.</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "80%",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.ezlight,
  },

  cardPicture: {
    height: "100%",
    maxHeight: 300,
    borderRadius: 10,
    borderWidth: 1,
  },

  cardText: {},
});

export default SwipeCard;
