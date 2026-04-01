import { useContext } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import Card from "../../components/Card";
import Content from "../../components/Content";
import GradientButton from "../../components/GradientButton";

import { colors } from "../../constants/theme";
import { IMCContext } from "../../context/ImcContext";

import { History as HistoryIcon, Lightbulb, Trash2 } from "lucide-react-native";
import { getIMCColor } from "../../utils/imc";

export default function History() {
  const { records, removeRecord, clearRecords } = useContext(IMCContext);

  const safeRecords = Array.isArray(records) ? records : [];

  function handleRemove(id) {
    if (!id) return;

    Alert.alert("Remover", "Deseja remover este registro?", [
      { text: "Cancelar" },
      { text: "Remover", onPress: () => removeRecord(id) },
    ]);
  }

  function handleClear() {
    Alert.alert("Limpar histórico", "Deseja apagar todo o histórico?", [
      { text: "Cancelar" },
      { text: "Apagar tudo", onPress: clearRecords },
    ]);
  }

  function handleShowDetails(item) {
    if (!item) return;

    Alert.alert(
      "Detalhes do registro",
      `Data: ${item.date ? new Date(item.date).toLocaleString() : "Sem data"}

Peso: ${item.weight ?? "-"} kg
Altura: ${item.height ?? "-"} m
IMC: ${item.imc ? Number(item.imc).toFixed(2) : "-"}
Classificação: ${item.classification ?? "-"}`,
      [{ text: "OK" }],
    );
  }

  return (
    <Content>
      {/* HISTÓRICO */}
      <Card icon={HistoryIcon} title="Histórico">
        {safeRecords.length === 0 ? (
          <Text style={{ textAlign: "center", color: colors.textTertiary }}>
            Nenhum histórico encontrado.
          </Text>
        ) : (
          <>
            <GradientButton
              title="Limpar histórico"
              onPress={handleClear}
              colorPrimary={colors.errorLighter}
              colorSecondary={colors.errorLighter}
              textColor={colors.error}
              style={{ marginBottom: 24 }}
            />

            {safeRecords.map((item, index) => {
              if (!item) return null;

              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleShowDetails(item)}
                  activeOpacity={0.8}
                >
                  <View
                    style={{
                      backgroundColor: colors.surface,
                      paddingBottom: index < safeRecords.length - 1 ? 12 : 0,
                      marginBottom: index < safeRecords.length - 1 ? 12 : 0,
                      borderBottomWidth: 1,
                      borderBottomColor:
                        index < safeRecords.length - 1
                          ? colors.textDimmed
                          : "transparent",
                    }}
                  >
                    {/* TOPO */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: 8,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: colors.textPrimary,
                        }}
                      >
                        {item.date
                          ? new Date(item.date).toLocaleDateString()
                          : "Sem data"}
                      </Text>

                      <TouchableOpacity
                        onPress={() => handleRemove(item.id)}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: colors.errorLighter,
                          paddingVertical: 6,
                          paddingHorizontal: 10,
                          borderRadius: 5,
                        }}
                      >
                        <Trash2 size={14} color={colors.error} />
                        <Text
                          style={{
                            color: colors.error,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginLeft: 4,
                          }}
                        >
                          Remover
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {/* DADOS */}
                    {[
                      ["Peso", `${item.weight ?? "-"}kg`],
                      ["Altura", `${item.height ?? "-"}m`],
                      ["IMC", item.imc ? Number(item.imc).toFixed(2) : "-"],
                      ["Classificação", item.classification ?? "-"],
                    ].map(([label, value], index) => (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: 2,
                        }}
                      >
                        <Text style={{ color: colors.textSecondary }}>
                          {label}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 600,
                            color:
                              label === "IMC"
                                ? getIMCColor(value)
                                : colors.textPrimary,
                          }}
                        >
                          {value}
                        </Text>
                      </View>
                    ))}
                  </View>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </Card>

      {/* DICA */}
      <Card icon={Lightbulb} title="Dica" variant="secondary">
        <Text style={{ color: colors.textSecondary }}>
          Verifique sempre seu histórico para acompanhar sua saúde ao longo do
          tempo.
        </Text>
      </Card>
    </Content>
  );
}
