import { Calculator as CalculatorIcon, Lightbulb } from "lucide-react-native";
import { useState } from "react";
import { Text } from "react-native";
import Card from "../../components/Card";
import Content from "../../components/Content";
import FormInput from "../../components/FormInput";
import GradientButton from "../../components/GradientButton";

export default function Calculator({ navigation }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");

  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade I";
    } else if (imc < 40) {
      return "Obesidade II";
    } else {
      return "Obesidade III";
    }
  }

  function calcularIMC() {
    if (!peso || !altura) return;

    const alturaM = altura / 100;
    const imc = (peso / (alturaM * alturaM)).toFixed(2);
    const classe = classificarIMC(imc);

    setResultado(imc);
    setClassificacao(classe);
  }

  return (
    <Content>
      <Card icon={CalculatorIcon} title="Calculadora">
        <FormInput
          label="Peso (Kg)"
          placeholder="Ex: 70"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
        <FormInput
          label="Altura (cm)"
          placeholder="Ex: 170"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <GradientButton
          title="Calcular meu IMC"
          onPress={calcularIMC}
        />
      </Card>
      <Card icon={Lightbulb} title="Resultado" variant="secondary">
        <Text>{resultado}</Text>
        <Text>{classificacao}</Text>
      </Card>
    </Content>
  );
}
