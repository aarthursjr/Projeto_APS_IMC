import { History as HistoryIcon, Lightbulb } from "lucide-react-native";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import { colors } from "../../constants/theme";

export default function History({ navigation }) {
  return (
    <Content>
      <Card icon={HistoryIcon} title="Histórico">
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
          Calcule e acompanhe seu índice de massa corporal de forma fácil e
          rápida.
        </Text>
      </Card>
    </Content>
  );
}
