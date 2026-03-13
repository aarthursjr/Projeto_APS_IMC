import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/theme";
import { styles } from "./styles";

export default function Tab({ icon: Icon, ...props }) {
  return (
    <TouchableOpacity
      style={props.active ? styles.navItemActive : styles.navItem}
      onPress={props.onPress}
    >
      {Icon && (
        <Icon
          size={props.iconSize ?? 24}
          color={props.iconColor ?? Colors.textPrimary}
        />
      )}
      <Text style={styles.navItemLabel}>{props.title}</Text>
    </TouchableOpacity>
  );
}
