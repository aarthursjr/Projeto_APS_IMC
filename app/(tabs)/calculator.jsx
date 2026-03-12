import { useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";

export default function HomeScreen({ navigation }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [historico, setHistorico] = useState([]);

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

    const novoRegistro = {
      data: new Date.now().toLocaleDateString("pt-BR"),
      imc: imc,
      classe: classe,
    };

    setHistorico([novoRegistro, ...historico]);
  }

  return (
    <ScrollView>
      <Text>Calculadora IMC</Text>

      <Text>Peso (kg)</Text>
      <TextInput
        placeholder="Ex: 70."
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text>Altura (170)</Text>
      <TextInput
        placeholder="Ex: 170."
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      <Text>Histórico</Text>

      {historico.map((item, index) => (
        <Text key={index}>
          {item.data} - IMC: {item.imc} - {item.classe}
        </Text>
      ))}
    </ScrollView>
  );
}
