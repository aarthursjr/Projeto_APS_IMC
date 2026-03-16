import { Colors } from "../../constants/theme";

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
    position: "absolute",
    left: 0,
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
    color: Colors.textTertiary,
  },
  scaleMarker: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -6,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: "50%",
    borderColor: Colors.surface,
  },
};
