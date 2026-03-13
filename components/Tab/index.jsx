import { Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/theme";
import style from "./style";

export default function Tab({ icon: Icon, ...props }) {
  return (
    <TouchableOpacity
      style={props.active ? style.navItemActive : style.navItem}
      onPress={props.onPress}
    >
      {Icon && (
        <Icon size={props.iconSize ?? 24} color={props.iconColor ?? Colors.textPrimary} />
      )}
      <Text style={style.navItemLabel}>{props.title}</Text>
    </TouchableOpacity>
  );
}
