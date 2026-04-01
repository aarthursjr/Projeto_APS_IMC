import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export default function GradientButton({
  onPress,
  title,
  style,
  colorPrimary,
  colorSecondary,
  start,
  end,
  textColor,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonWrapper, style]}>
      <LinearGradient
        colors={[
          colorPrimary || colors.primary,
          colorSecondary || colors.accent,
        ]}
        start={start || { x: 0, y: 0 }}
        end={end || { x: 0.03, y: 1.5 }}
        style={styles.buttonWrapper}
      >
        <Text style={[styles.buttonText, { color: textColor || "#fff" }]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
