import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    textAlign: "center",
  },
  textButton: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.colors.red,
  },
});
