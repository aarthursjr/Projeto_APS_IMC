import { ScrollView } from "react-native";
import Header from "../Header";
import { styles } from "./styles";

export default function Content({ children }) {
  return (
    <ScrollView style={styles.container}>
      <Header
        image={require("../../assets/images/logo-64x64.png")}
        title="Meu IMC"
        subtitle="Gerencie seu índice de massa corporal"
      />
      {children}
    </ScrollView>
  );
}
