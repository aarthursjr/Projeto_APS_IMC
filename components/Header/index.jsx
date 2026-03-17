import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Header({ image, title, subtitle }) {
  return (
    <View style={styles.header}>
      {image && <Image source={image} style={styles.image} />}
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}
