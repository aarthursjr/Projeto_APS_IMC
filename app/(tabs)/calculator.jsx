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
import { Colors, Styles } from "../../constants/theme";

export default function Calculator({ navigation }) {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [classificacao, setClassificacao] = useState("");
  const [pesoIdealMessage, setPesoIdealMessage] = useState("");
  const imcColors = {
    "Muito abaixo do peso": Colors.grade1,
    "Abaixo do peso": Colors.grade2,
    "Peso normal": Colors.grade3,
    Sobrepeso: Colors.grade4,
    "Obesidade I": Colors.grade5,
    "Obesidade II": Colors.grade6,
    "Obesidade III": Colors.grade7,
  };

  function formataAltura(alturaDigitada) {
    let valor = alturaDigitada.replace(/,/g, ".");
    valor = valor.replace(/[^0-9]/g, ""); // Remove tudo exceto números
    if (valor.length === 0) {
      setAltura(0);
      return;
    }
    // Garante que só tenha até 1 dígito antes do ponto
    if (valor.length > 1) {
      valor = valor.slice(0, 1) + "." + valor.slice(1, 3); // até 2 casas decimais
    }

    setAltura(valor);
  }

  //Classificação do IMC
  function classificarIMC(imc) {
    switch (true) {
      case imc < 17.0:
        return "Muito abaixo do peso";

      case imc >= 17.0 && imc <= 18.49:
        return "Abaixo do peso";

      case imc >= 18.5 && imc <= 24.99:
        return "Peso normal";

      case imc >= 25.0 && imc <= 29.99:
        return "Sobrepeso";

      case imc >= 30.0 && imc <= 34.99:
        return "Obesidade I";

      case imc >= 35.0 && imc <= 39.99:
        return "Obesidade II";

      case imc > 39.99:
        return "Obesidade III";

      default:
        return "";
    }
  }

  //Cálculo do IMC
  function calcularIMC() {
    if (!peso || !altura) return;

    if (peso <= 0 || isNaN(peso)) {
      console.log("Valor inválido");
      return;
    }

    if (altura <= 0 || isNaN(altura)) {
      console.log("Valor inválido");
      return;
    }

    const imcValor = Number((peso / altura ** 2).toFixed(2));
    const classe = classificarIMC(imcValor);

    setImc(imcValor);
    setClassificacao(classe);
    CalcularPesoIdeal(imcValor, altura);
  }

  //Cáculo do peso ideal
  function CalcularPesoIdeal(imc, altura) {
    if (imc < 18.5) {
      let pesoIdeal = 18.5 * altura ** 2;
      setPesoIdealMessage(
        "Seu peso mínimo ideal é de " + pesoIdeal.toFixed(2) + "Kg",
      );
    } else if (imc > 24.99) {
      let pesoIdeal = 24.99 * altura ** 2;
      setPesoIdealMessage(
        "Seu peso máximo ideal é de " + pesoIdeal.toFixed(2) + "Kg",
      );
    } else {
      setPesoIdealMessage("Você está no peso ideal. Parabéns!");
    }
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
          label="Altura (m)"
          placeholder="Ex: 1.70"
          keyboardType="numeric"
          value={altura}
          onChangeText={(text) => formataAltura(text)}
        />
        <GradientButton title="Calcular meu IMC" onPress={calcularIMC} />
      </Card>
      <Card icon={ClipboardCheck} title="Resultado">
        {imc !== 0 ? (
          <Text
            style={[Styles.calculator.imc, { color: imcColors[classificacao] }]}
          >
            {imc}
          </Text>
        ) : (
          <Text>O resultado do cálculo do seu IMC irá aparecer aqui.</Text>
        )}
        {classificacao !== "" && (
          <Text style={Styles.calculator.classificacao}>{classificacao}</Text>
        )}
      </Card>
      {pesoIdealMessage !== "" && (
        <Card
          icon={Lightbulb}
          iconColor={Colors.accent}
          title="Dica"
          variant="secondary"
        >
          <Text style={Styles.calculator.pesoIdeal}>{pesoIdealMessage}</Text>
        </Card>
      )}
    </Content>
  );
}
