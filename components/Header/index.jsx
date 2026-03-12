import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function Header({ image, title, subtitle }) {
  const imageSource = { uri: image };
  return (
    <View style={styles.header}>
      {image && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}
