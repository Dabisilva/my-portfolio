import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    backgroundColor: theme.colors.blue[85],
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  text: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
});
