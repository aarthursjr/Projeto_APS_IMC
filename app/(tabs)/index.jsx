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
  const safeRecords = Array.isArray(records) ? records.filter(Boolean) : [];

  const imc = safeRecords[0]?.imc ?? 0;
  const lastRecords = safeRecords.slice(0, 5);

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
      {/* COMO ESTOU HOJE */}
      <Card icon={Gauge} title="Como estou hoje">
        {imc > 0 ? (
          <>
            <Scale marker={imc} />

            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
                color: getIMCColor(Number(imc) || 0),
              }}
            >
              {Number(imc).toFixed(2)}
            </Text>

            <Text
              style={{
                textAlign: "center",
                color: colors.textSecondary,
              }}
            >
              {classifyIMC(Number(imc) || 0)}
            </Text>
          </>
        ) : (
          <Text>
            Calcule e acompanhe seu índice de massa corporal de forma fácil e
            rápida.
          </Text>
        )}
      </Card>

      {/* ÚLTIMOS REGISTROS */}
      <Card icon={History} title="Últimos registros">
        {imc > 0 ? (
          <>
            {/* CABEÇALHO */}
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

            {/* LISTA */}
            {lastRecords.map((record, index) => {
              if (!record) return null;

              const nextRecord = lastRecords[index + 1];

              return (
                <View
                  key={record.id ?? index}
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
                    {record.date
                      ? new Date(record.date).toLocaleDateString()
                      : "Sem data"}
                  </Text>

                  <Text style={{ flex: 2, fontSize: 14 }}>
                    {record.weight ?? "-"}Kg
                  </Text>

                  <Text
                    style={{
                      flex: 2,
                      fontSize: 14,
                      fontWeight: 600,
                      color: getIMCColor(Number(record.imc) || 0),
                    }}
                  >
                    {record.imc
                      ? Number(record.imc).toFixed(2)
                      : "-"}
                  </Text>

                  <Text style={{ flex: 1, textAlign: "right" }}>
                    {renderRank(
                      Number(record.imc) || 0,
                      nextRecord ? Number(nextRecord.imc) || 0 : Number(record.imc) || 0
                    )}
                  </Text>
                </View>
              );
            })}
          </>
        ) : (
          <Text>
            Ainda não há nenhum registro. Utilize a nossa calculadora e comece
            já a monitorar o seu IMC!
          </Text>
        )}
      </Card>

      {/* DICA */}
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