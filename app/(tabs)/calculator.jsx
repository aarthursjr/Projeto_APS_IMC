import {
  Calculator as CalculatorIcon,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react-native";
import { useState } from "react";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import FormInput from "../../components/FormInput";
import GradientButton from "../../components/GradientButton";
import { colors, styles } from "../../constants/theme";
import {
  calculateIMC,
  classifyIMC,
  getIdealWeight,
  getIMCColor,
} from "../../utils/imc";

export default function Calculator({ navigation }) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [imc, setImc] = useState(0);
  const [classification, setClassification] = useState("");
  const [idealWeightMessage, setWeightIdealMessage] = useState("");
  const [imcColor, setImcColor] = useState("");

  function formatHeight(heightInput) {
    let value = heightInput.replace(/,/g, ".");
    value = value.replace(/[^0-9]/g, ""); // Remove tudo exceto números
    if (value.length === 0) {
      setHeight(0);
      return;
    }
    // Garante que só tenha até 1 dígito antes do ponto
    if (value.length > 1) {
      value = value.slice(0, 1) + "." + value.slice(1, 3); // até 2 casas decimais
    }

    setHeight(value);
  }

  //Cálculo e exibição do resultado
  function showIMCResult() {
    const imc_value = calculateIMC(weight, height);
    const imc_class = classifyIMC(imc_value);
    const imc_color = getIMCColor(imc_value);
    const ideal_weight = getIdealWeight(imc_value, height);

    setImc(imc_value);
    setClassification(imc_class);
    setImcColor(imc_color);
    setWeightIdealMessage(ideal_weight);
  }

  return (
    <Content>
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
          onChangeText={(text) => formatHeight(text)}
        />
        <GradientButton title="Calcular meu IMC" onPress={showIMCResult} />
      </Card>
      <Card icon={ClipboardCheck} title="Resultado">
        {imc !== 0 ? (
          <Text style={[styles.calculator.imc, { color: imcColor }]}>
            {imc}
          </Text>
        ) : (
          <Text>O resultado do cálculo do seu IMC irá aparecer aqui.</Text>
        )}
        {classification !== "" && (
          <Text style={styles.calculator.classification}>{classification}</Text>
        )}
      </Card>
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
