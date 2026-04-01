import {
  ChevronDown,
  ChevronUp,
  Gauge,
  History,
  Lightbulb,
  Minus,
} from "lucide-react-native";
import { useContext } from "react";
import { Text, View } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import Scale from "../../components/Scale";
import { colors } from "../../constants/theme";
import { IMCContext } from "../../context/ImcContext";
import { classifyIMC, getIMCColor } from "../../utils/imc";

export default function HomeScreen({ navigation }) {
  const { records } = useContext(IMCContext);
  const imc = records[0] ? records[0].imc : 0;
  const lastRecords = records.slice(0, 5);

  function renderRank(current, previous) {
    if (current < previous) {
      return <ChevronDown size={16} color={colors.textSecondary} />;
    } else if (current > previous) {
      return <ChevronUp size={16} color={colors.textSecondary} />;
    } else {
      return <Minus size={16} color={colors.textSecondary} />;
    }
  }

  return (
    <Content>
      <Card icon={Gauge} title="Como estou hoje">
        {imc > 0 ? (
          <>
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
              {classifyIMC(imc)}
            </Text>
          </>
        ) : (
          <Text>
            Calcule e acompanhe seu índice de massa corporal de forma fácil e
            rápida.
          </Text>
        )}
      </Card>
      <Card icon={History} title="Últimos registros">
        {imc > 0 ? (
          <>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 6,
                borderBottomWidth: 1,
                borderBottomColor: colors.textDimmed,
              }}
            >
              <Text style={{ flex: 4, fontSize: 14, fontWeight: 600 }}>
                Data
              </Text>
              <Text style={{ flex: 2, fontSize: 14, fontWeight: 600 }}>
                Peso
              </Text>
              <Text style={{ flex: 2, fontSize: 14, fontWeight: 600 }}>
                IMC
              </Text>
              <Text style={{ flex: 1 }} />
            </View>
            {lastRecords.map((record, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: colors.textDimmed,
                  paddingVertical: 6,
                }}
              >
                <Text style={{ flex: 4, fontSize: 14 }}>
                  {new Date(record.date).toLocaleDateString()}
                </Text>
                <Text style={{ flex: 2, fontSize: 14 }}>{record.weight}Kg</Text>
                <Text
                  style={{
                    flex: 2,
                    fontSize: 14,
                    fontWeight: 600,
                    color: getIMCColor(record.imc),
                  }}
                >
                  {record.imc}
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {renderRank(
                    record.imc,
                    lastRecords.length < 5 && index === lastRecords.length - 1
                      ? record.imc
                      : records[index + 1].imc,
                  )}
                </Text>
              </View>
            ))}
          </>
        ) : (
          <Text>
            Ainda não há nenhum registro. Utilize a nossa calculadora e comece
            já a monitorar o seu IMC!
          </Text>
        )}
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
