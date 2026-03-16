import { Text, View } from "react-native";
import { Colors } from "../../constants/theme";
import { styles } from "./styles";

const min = 14;
const max = 41;
const range = max - min;
const scalePoints = [min, 17, 18.5, 25, 30, 35, 40, max];
const scaleSteps = [15, 20, 25, 30, 35, 40];

// Calcula a porcentagem de value na escala
function toPercent(value, start = min) {
  return ((value - start) / range) * 100 + "%";
}

// Identifica em que intervalo value está
function getScaleIndex(value) {
  return scalePoints.findIndex(
    (point, i) =>
      i < scalePoints.length - 1 &&
      value >= point &&
      value < scalePoints[i + 1],
  );
}

// Retorna a cor correspondente de value
function getScaleColor(value) {
  const index = getScaleIndex(value);
  return index >= 0 ? Colors["grade" + (index + 1)] : Colors.textPrimary;
}

export default function Scale({ marker }) {
  const markerColor = getScaleColor(marker);

  return (
    <View style={styles.scale}>
      <View style={styles.scaleBar}>
        {scalePoints.slice(0, -1).map((point, i) => (
          <View
            key={i}
            style={[
              styles.scaleBarArea,
              {
                width: toPercent(scalePoints[i + 1], point),
                backgroundColor: Colors["grade" + (i + 1)],
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.scaleSteps}>
        {scaleSteps.map((step, i) => (
          <View
            key={step}
            style={[styles.scaleStepContainer, { left: toPercent(step) }]}
          >
            <View
              key={step}
              style={[
                styles.scaleStep,
                {
                  backgroundColor: getScaleColor(step),
                },
              ]}
            ></View>
            <Text style={styles.scaleStepLabel}>{step}</Text>
          </View>
        ))}
      </View>
      <View
        style={[
          styles.scaleMarker,
          { left: toPercent(marker), backgroundColor: markerColor },
        ]}
      ></View>
    </View>
  );
}
