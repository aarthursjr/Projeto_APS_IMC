import { Text, View } from "react-native";
import { imc_ranges } from "../../constants/imc";
import { getIMCColor } from "../../utils/imc";
import { styles } from "./styles";

const scale_padding = 1; // Espaço extra no início e fim da escala
const scale_steps = [15, 20, 25, 30, 35, 40]; // Marcadores da escala
const min = scale_steps[0] - scale_padding; // Ponto mínimo da escala
const max = scale_steps[scale_steps.length - 1] + scale_padding; // Ponto máximo da escala
const range = max - min; // Extensão da escala
const scale_points = [min, ...imc_ranges.slice(0, -1).map((r) => r.max), max]; // Pontos que delimitam as áreas coloridas

// Calcula a porcentagem de value na escala
function toPercent(value, start = min) {
  return ((value - start) / range) * 100 + "%";
}

export default function Scale({ marker }) {
  const marker_color = getIMCColor(marker);
  let marker_left = marker;
  if (marker < min) {
    marker_left = min;
  } else if (marker > max) {
    marker_left = max;
  }

  return (
    <View style={styles.scale}>
      <View style={styles.scaleBar}>
        {scale_points.slice(0, -1).map((point, i) => (
          <View
            key={i}
            style={[
              styles.scaleBarArea,
              {
                width: toPercent(scale_points[i + 1], point),
                backgroundColor:
                  imc_ranges[i]?.color ??
                  imc_ranges[imc_ranges.length - 1].color,
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.scaleSteps}>
        {scale_steps.map((step, i) => (
          <View
            key={step}
            style={[styles.scaleStepContainer, { left: toPercent(step) }]}
          >
            <View
              key={step}
              style={[
                styles.scaleStep,
                {
                  backgroundColor: getIMCColor(step),
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
          { left: toPercent(marker_left), backgroundColor: marker_color },
        ]}
      ></View>
    </View>
  );
}
