import { Gauge, History, Lightbulb } from "lucide-react-native";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import Scale from "../../components/Scale";
import { colors } from "../../constants/theme";
import { getIMCColor } from "../../utils/imc";

export default function HomeScreen({ navigation }) {
  const imc = 22;
  return (
    <Content>
      <Card icon={Gauge} title="Como estou hoje">
        <Scale marker={imc} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: getIMCColor(imc),
          }}
        >
          {imc}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: colors.textSecondary,
          }}
        >
          Normal
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
        iconColor={colors.accent}
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
