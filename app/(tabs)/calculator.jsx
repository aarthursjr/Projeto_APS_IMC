import {
  Calculator as CalculatorIcon,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react-native";

import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";

import Card from "../../components/Card";
import Content from "../../components/Content";
import FormInput from "../../components/FormInput";
import GradientButton from "../../components/GradientButton";

import { colors, styles } from "../../constants/theme";
import { IMCContext } from "../../context/ImcContext";

import {
  calculateIMC,
  classifyIMC,
  getIdealWeight,
  getIMCColor,
} from "../../utils/imc";

export default function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);
  const [classification, setClassification] = useState("");
  const [idealWeightMessage, setWeightIdealMessage] = useState("");
  const [imcColor, setImcColor] = useState("");

  const { records, addRecord } = useContext(IMCContext);

  // 🔄 Preenche altura com último valor usado
  useEffect(() => {
    if (records.length > 0 && records[0].height && !height) {
      setHeight(String(records[0].height));
    }
  }, [records]);

  // 📏 Formatar altura (1.75)
  function formatHeight(heightInput) {
    let value = heightInput.replace(/,/g, ".");
    value = value.replace(/[^0-9]/g, "");

    if (value.length === 0) {
      setHeight("");
      return;
    }

    if (value.length > 1) {
      value = value.slice(0, 1) + "." + value.slice(1, 3);
    }

    setHeight(value);
  }

  // 🧠 Calcular IMC
  function showIMCResult() {
    const imc_value = calculateIMC(weight, height);
    const imc_class = classifyIMC(imc_value);
    const imc_color = getIMCColor(imc_value);
    const ideal_weight = getIdealWeight(imc_value, height);

    setIMC(imc_value);
    setClassification(imc_class);
    setImcColor(imc_color);
    setWeightIdealMessage(ideal_weight);

    // ✅ CORREÇÃO AQUI
    addRecord({
      weight,
      height,
      imc: imc_value,
      classification: imc_class,
      date: new Date().toISOString(),
    });
  }

  return (
    <Content>
      {/* 📥 INPUT */}
      <Card icon={CalculatorIcon} title="Calculadora">
        <FormInput
          label="Peso (Kg)"
          placeholder="Ex: 70"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />

        <FormInput
          label="Altura (m)"
          placeholder="Ex: 1.70"
          keyboardType="numeric"
          value={height}
          onChangeText={formatHeight}
        />

        <GradientButton title="Calcular meu IMC" onPress={showIMCResult} />
      </Card>

      {/* 📊 RESULTADO */}
      <Card icon={ClipboardCheck} title="Resultado">
        {imc !== 0 ? (
          <Text style={[styles.calculator.imc, { color: imcColor }]}>
            {Number(imc).toFixed(2)}
          </Text>
        ) : (
          <Text>O resultado do cálculo do seu IMC irá aparecer aqui.</Text>
        )}

        {classification !== "" && (
          <Text style={styles.calculator.classification}>
            {classification}
          </Text>
        )}
      </Card>

      {/* 💡 DICA */}
      {idealWeightMessage !== "" && (
        <Card
          icon={Lightbulb}
          iconColor={colors.accent}
          title="Dica"
          variant="secondary"
        >
          <Text style={styles.calculator.idealWeight}>
            {idealWeightMessage}
          </Text>
        </Card>
      )}
    </Content>
  );
}