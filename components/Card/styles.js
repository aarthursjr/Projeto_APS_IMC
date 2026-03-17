import { colors } from "../../constants/theme";

export const styles = {
  card: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    borderRadius: 20,
    padding: 25,
    marginBlock: 15,
  },
  variants: {
    primary: {
      backgroundColor: colors.surface,
      elevation: 10,
      shadowColor: colors.textTertiary,
    },
    secondary: {
      backgroundColor: colors.primaryLighter,
    },
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
};
