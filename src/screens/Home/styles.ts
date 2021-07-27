import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue[100],
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
