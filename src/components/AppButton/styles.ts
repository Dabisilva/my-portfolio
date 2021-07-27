import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.blue[60],
  },
  textButton: {
    textAlign: "center",
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text500,
  },
});
