import { View } from "react-native";
import { Colors } from "../../constants/theme";
import { styles } from "./styles";

export default function Scale({ marker }) {
  const min = 14;
  const max = 41;
  const scaleAreas = [
    { start: min, end: 17, color: Colors.grade1 },
    { start: 17, end: 18.5, color: Colors.grade2 },
    { start: 18.5, end: 25, color: Colors.grade3 },
    { start: 25, end: 30, color: Colors.grade4 },
    { start: 30, end: 35, color: Colors.grade5 },
    { start: 35, end: 40, color: Colors.grade6 },
    { start: 40, end: max, color: Colors.grade7 },
  ];
  const scaleSteps = [15, 20, 25, 30, 35, 40];
  const markerPosition = ((marker - min) / (max - min)) * 100;
  const markerArea = scaleAreas.find(
    (a) => marker >= a.start && marker < a.end,
  );
  const markerColor = markerArea ? markerArea.color : Colors.textPrimary;

  return (
    <View style={styles.scale}>
      <View>
        <View style={styles.scaleBar}>
          {scaleAreas.map((area, idx) => {
            const areaWidth = ((area.end - area.start) / (max - min)) * 100;
            return (
              <View
                key={idx}
                style={[
                  styles.scaleBarArea,
                  {
                    width: areaWidth + "%",
                    backgroundColor: area.color,
                  },
                ]}
              />
            );
          })}
        </View>
        <View style={styles.scaleSteps}>
          {scaleSteps.map((step) => {
            const area = scaleAreas.find(
              (a) => step >= a.start && step < a.end,
            );
            const color = area ? area.color : Colors.textPrimary;
            const left = ((step - min) / (max - min)) * 100;
            return (
              <View
                key={step}
                style={[
                  styles.scaleStep,
                  {
                    left: left + "%",
                    backgroundColor: color,
                  },
                ]}
              />
            );
          })}
        </View>
        <View
          style={[
            styles.scaleMarker,
            {
              left: markerPosition + "%",
              backgroundColor: markerColor,
            },
          ]}
        ></View>
      </View>
    </View>
  );
}
