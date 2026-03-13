import { Bulb, History as HistoryIcon, Info } from "lucide-react-native";
import { ScrollView, Text } from "react-native";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function History({ navigation }) {
  return (
    <ScrollView>
      <Header
        image={"../assets/logo-64x64.png"}
        title="Histórico"
        subtitle="Veja seus registros anteriores de índice de massa corporal"
      />
      <Card icon={Info} title="Como estou hoje">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
      <Card icon={HistoryIcon} title="Últimos registros">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
      <Card icon={Bulb} title="Dica" variant="secondary">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
    </ScrollView>
  );
}
