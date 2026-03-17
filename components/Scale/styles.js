import { colors } from "../../constants/theme";

export const styles = {
  scale: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
    width: "100%",
    height: 32,
  },
  scaleBar: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "stretch",
    top: 2,
    width: "100%",
    height: 4,
  },
  scaleBarArea: {
    height: 4,
  },
  scaleSteps: {
    width: "100%",
    height: 32,
  },
  scaleStepContainer: {
    position: "absolute",
  },
  scaleStep: {
    width: 2,
    height: 8,
  },
  scaleStepLabel: {
    top: 4,
    left: -6,
    fontSize: 12,
    color: colors.textTertiary,
  },
  scaleMarker: {
    position: "absolute",
    top: -6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: "50%",
    borderColor: colors.surface,
    transform: [{ translateX: "-50%" }],
  },
};
