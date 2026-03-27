import { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import Card from "../../components/Card";
import Content from "../../components/Content";
import GradientButton from "../../components/GradientButton";

import { colors } from "../../constants/theme";
import { IMCContext } from "../../context/ImcContext";

import {
  Info,
  History as HistoryIcon,
  Bulb,
  Trash2,
} from "lucide-react-native";

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

  // 🆕 ALERT COM DADOS
  function handleShowDetails(item) {
    if (!item) return;

    Alert.alert(
      "Detalhes do registro",
      `Data: ${
        item.date
          ? new Date(item.date).toLocaleDateString()
          : "Sem data"
      }
      
Peso: ${item.weight ?? "-"} kg
Altura: ${item.height ?? "-"} m
IMC: ${item.imc ? Number(item.imc).toFixed(2) : "-"}
Classificação: ${item.classification ?? "-"}`,
      [{ text: "OK" }]
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Content>
        {/* INFO */}
        <Card icon={Info} title="Como estou hoje">
          <Text style={{ color: colors.textSecondary }}>
            Seus registros aparecem abaixo.
          </Text>
        </Card>

        {/* HISTÓRICO */}
        <Card icon={HistoryIcon} title="Últimos registros">
          {safeRecords.length === 0 ? (
            <Text style={{ textAlign: "center", color: colors.textTertiary }}>
              Nenhum histórico encontrado.
            </Text>
          ) : (
            <>
              {/* BOTÃO LIMPAR */}
              <GradientButton
                title="Limpar histórico"
                onPress={handleClear}
              />

              {/* LISTA */}
              {safeRecords.map((item) => {
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
                        borderRadius: 12,
                        padding: 14,
                        marginBottom: 12,
                        elevation: 2,
                      }}
                    >
                      {/* TOPO */}
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 8,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.textTertiary,
                          }}
                        >
                          {item.date
                            ? new Date(item.date).toLocaleDateString()
                            : "Sem data"}
                        </Text>

                        {/* BOTÃO REMOVER */}
                        <TouchableOpacity
                          onPress={() => handleRemove(item.id)}
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: colors.error,
                            paddingVertical: 6,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                          }}
                        >
                          <Trash2 size={14} color="#fff" />
                          <Text
                            style={{
                              color: "#fff",
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
                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.textSecondary }}>Peso</Text>
                        <Text style={{ fontWeight: "bold" }}>
                          {item.weight ?? "-"} kg
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.textSecondary }}>Altura</Text>
                        <Text style={{ fontWeight: "bold" }}>
                          {item.height ?? "-"} m
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.textSecondary }}>IMC</Text>
                        <Text style={{ fontWeight: "bold", color: colors.primary }}>
                          {item.imc ? Number(item.imc).toFixed(2) : "-"}
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: colors.textSecondary }}>Classificação</Text>
                        <Text style={{ fontWeight: "bold" }}>
                          {item.classification ?? "-"}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </Card>

        {/* DICA */}
        <Card icon={Bulb} title="Dica" variant="secondary">
          <Text style={{ color: colors.textSecondary }}>
            Manter histórico ajuda a acompanhar sua saúde ao longo do tempo.
          </Text>
        </Card>
      </Content>
    </ScrollView>
  );
}