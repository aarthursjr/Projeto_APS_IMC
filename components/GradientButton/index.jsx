import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export default function GradientButton({ ...props }) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonWrapper}>
      <LinearGradient
        colors={[colors.primary, colors.accent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.033, y: 1.3 }}
        style={styles.buttonWrapper}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
