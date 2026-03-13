import { Bulb, Gauge, History } from "lucide-react-native";
import { ScrollView, Text } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Header
        image={"../assets/logo-64x64.png"}
        title="Meu IMC"
        subtitle="Gerencie seu índice de massa corporal"
      />
      <Card icon={Gauge} title="Como estou hoje">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
      <Card icon={History} title="Últimos registros">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
      <Card icon={Bulb} title="Dica" secondary>
        <Text>
          O IMC é um indicador de peso ideal. Faça registros diários e procure
          se manter na zona verde para uma vida mais saudável.
        </Text>
      </Card>
    </ScrollView>
  );
}
