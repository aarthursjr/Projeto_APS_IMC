import { View } from "react-native";
import { Colors } from "../../constants/theme";
import { styles } from "./styles";

const min = 14;
const max = 41;
const range = max - min;
const scalePoints = [min, 17, 18.5, 25, 30, 35, 40, max];
const scaleAreas = scalePoints.slice(0, -1).map((point, i) => ({
  // Calcula a porcentagem da largura de cada área na escala
  width: ((scalePoints[i + 1] - point) / range) * 100 + "%",
  color: Colors["grade" + (i + 1)],
}));

const scaleSteps = [15, 20, 25, 30, 35, 40];
const stepsSettings = scaleSteps.map((step) => {
  const stepIndex = getScaleIndex(step);
  return {
    left: ((step - min) / range) * 100 + "%",
    color:
      stepIndex >= 0 ? Colors["grade" + (stepIndex + 1)] : Colors.textPrimary,
  };
});

// Identifica em que intervalo entre dois valores de scalePoints o value está
function getScaleIndex(value) {
  return scalePoints.findIndex(
    (point, i) =>
      i < scalePoints.length - 1 &&
      value >= point &&
      value < scalePoints[i + 1],
  );
}

export default function Scale({ marker }) {
  const markerPosition = ((marker - min) / range) * 100 + "%";
  const markerIndex = getScaleIndex(marker);
  const markerColor =
    markerIndex >= 0 ? Colors["grade" + (markerIndex + 1)] : Colors.textPrimary;

  return (
    <View style={styles.scale}>
      <View>
        <View style={styles.scaleBar}>
          {scaleAreas.map((area, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.scaleBarArea,
                  { width: area.width, backgroundColor: area.color },
                ]}
              />
            );
          })}
        </View>
        <View style={styles.scaleSteps}>
          {stepsSettings.map((step, i) => (
            <View
              key={i}
              style={[
                styles.scaleStep,
                { left: step.left, backgroundColor: step.color },
              ]}
            />
          ))}
        </View>
        <View
          style={[
            styles.scaleMarker,
            { left: markerPosition, backgroundColor: markerColor },
          ]}
        ></View>
      </View>
    </View>
  );
}
