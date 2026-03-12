import { Title, View } from "react-native";
import style from "./style";

export default function Card({ icon: Icon, ...props }) {
  return (
    <View style={ props.secondary ? style.secondary : style.primary}>
      <View>
        {Icon && (
            <Icon size={props.iconSize ?? 24} color={props.iconColor ?? "#000"} />
        )}
        <Title>{props.title}</Title>
      </View>
      <View>
        {props.children}
      </View>
    </View>
  );
}
