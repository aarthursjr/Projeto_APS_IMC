import { Info, Lightbulb } from "lucide-react-native";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import { colors } from "../../constants/theme";

export default function About({ navigation }) {
  return (
    <Content>
      <Card icon={Info} title="Sobre">
        <Text style={{ marginBottom: 10 }}>
          O aplicativo <Text style={{ fontWeight: "bold" }}>Meu IMC</Text> foi
          desenvolvido como parte da Atividade Prática Supervisionada (APS) da
          disciplina Desenvolvimento de Aplicativos Móveis, da Universidade
          Unicarioca.
        </Text>
        <Text>
          Com uma interface simples e intuitiva, este aplicativo permite o
          rápido cálculo e acompanhamento do Índice de Massa Corporal,
          auxiliando você a monitorar sua saúde de forma prática e acessível.
        </Text>
      </Card>
      <Card
        icon={Lightbulb}
        iconColor={colors.accent}
        title="Desenvolvido por"
        variant="secondary"
      >
        <Text>• André Arthur da Silva Junior</Text>
        <Text>• Daniel da Silva Granha</Text>
        <Text>• Filipe Gomes Duarte</Text>
      </Card>
    </Content>
  );
}
