import { Colors } from "../../constants/theme";

export const styles = {
  scale: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
    height: 8,
  },
  scaleBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "stretch",
    marginTop: 2,
    height: 4,
  },
  scaleBarArea: {
    height: 4,
  },
  scaleSteps: {
    position: "absolute",
    left: 0,
    flex: 1,
    flexDirection: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 8,
  },
  scaleStep: {
    position: "absolute",
    width: 2,
    height: 8,
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
