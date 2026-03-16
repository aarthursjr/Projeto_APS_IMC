import { Gauge, History, Lightbulb } from "lucide-react-native";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import Scale from "../../components/Scale";
import { Colors } from "../../constants/theme";

export default function HomeScreen({ navigation }) {
  return (
    <Content>
      <Card icon={Gauge} title="Como estou hoje">
        <Text>
          <Scale marker="22" />
        </Text>
      </Card>
      <Card icon={History} title="Últimos registros">
        <Text>
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
      <Card
        icon={Lightbulb}
        iconColor={Colors.accent}
        title="Dica"
        variant="secondary"
      >
        <Text>
          O IMC é um indicador de peso ideal. Faça registros diários e procure
          se manter na zona verde para uma vida mais saudável.
        </Text>
      </Card>
    </Content>
  );
}
