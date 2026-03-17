import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants/theme";
import { styles } from "./styles";

export default function Tab({ icon: Icon, ...props }) {
  const iconColor = props.active ? colors.primary : colors.textPrimary;

  return (
    <TouchableOpacity style={styles.navItem} onPress={props.onPress}>
      {Icon && (
        <Icon
          size={props.iconSize ?? 24}
          color={props.iconColor ?? iconColor}
        />
      )}
      <Text
        style={[styles.navItemLabel, props.active && styles.navItemActiveLabel]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
