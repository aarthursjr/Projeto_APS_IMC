import { Image, Text, View } from "react-native";
import { style } from "./style";

export default function Header({ image, title, subtitle }) {
  const imageSource = { uri: image };
  return (
    <View style={style.header}>
      {image && <Image source={imageSource} style={style.image} />}
      <Text style={style.title}>{title}</Text>
      {subtitle && <Text style={style.subtitle}>{subtitle}</Text>}
    </View>
  );
}
