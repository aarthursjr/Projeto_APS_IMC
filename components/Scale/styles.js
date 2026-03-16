import { Colors } from "../../constants/theme";

export const styles = {
  scale: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    justifyItems: "stretch",
    alignItems: "center",
    height: 8,
  },
  scaleBar: {
    flex: 1,
    flexDirection: "row",
    justifyItems: "stretch",
    marginTop: 2,
    height: 4,
  },
  scaleBarArea: {
    height: 4,
  },
  scaleSteps: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: 8,
  },
  scaleStep: {
    position: "absolute",
    width: 2,
    height: 8,
  },
  scaleMarker: {
    position: "absolute",
    top: -6,
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: Colors.surface,
    borderRadius: 8,
  },
};
