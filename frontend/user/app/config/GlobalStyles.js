import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: colors.light,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
