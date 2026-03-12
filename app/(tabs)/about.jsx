import { Bulb, History, Info } from "lucide-react-native";
import { ScrollView, Text } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function About({ navigation }) {
  return (
    <ScrollView>
      <Header
        image={"../assets/logo-64x64.png"}
        title="Sobre"
        subtitle="Saiba mais sobre o aplicativo"
      />
      <Card
        icon = {Info}
        title="Como estou hoje"
      >
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e rápida.
        </Text>
      </Card>
      <Card
        icon = {History}
        title="Últimos registros"
      >
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e rápida.
        </Text>
      </Card>
      <Card
        icon = {Bulb}
        title="Dica"
        secondary
      >
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e rápida.
        </Text>
      </Card>
    </ScrollView>
  );
}
