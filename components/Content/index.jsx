import { ScrollView } from "react-native";
import Header from "../Header";
import { styles } from "./styles";

export default function Content({ children }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}
      contentContainerStyle={{
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header
        image={require("../../assets/images/logo-64x64.png")}
        title="Meu IMC"
        subtitle="Gerencie seu índice de massa corporal"
      />
      {children}
    </ScrollView>
  );
}