import { colors } from "../../constants/theme";

export const styles = {
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginVertical: 20,
  },
  image: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
};
