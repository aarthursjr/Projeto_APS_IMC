import { Text, View } from "react-native";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export default function Card({ icon: Icon, ...props }) {
  return (
    <View style={[styles.card, styles.variants[props.variant ?? "primary"]]}>
      <View style={styles.titleContainer}>
        {Icon && (
          <Icon
            size={props.iconSize ?? 24}
            color={props.iconColor ?? colors.primary}
          />
        )}
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>{props.children}</View>
    </View>
  );
}
