import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.blue[90],
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noButton: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.blue[50],
  },
  yesButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.red,
  },
  textButton: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
});
