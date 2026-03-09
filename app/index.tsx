import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";

export default function App() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [data, setData] = useState(new Date());
  const [mostrarPicker, setMostrarPicker] = useState(false);
  const [resultado, setResultado] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [historico, setHistorico] = useState([]);

  function classificarIMC(imc){
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade I";
    if (imc < 40) return "Obesidade II";
    return "Obesidade III";
  }

function calcularIMC(){

  if(!peso || !altura) return;

  const alturaM = altura / 100;
  const imc = (peso / (alturaM * alturaM)).toFixed(2);

  const classe = classificarIMC(imc);

  setResultado(imc);
  setClassificacao(classe);

  const novoRegistro = {
    data: data.toLocaleDateString("pt-BR"),
    imc: imc,
    classe: classe
  };

  setHistorico([novoRegistro, ...historico]);
}

  function formatarData(data){
    return data.toLocaleDateString("pt-BR");
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

      <Text>Data</Text>
      <Button
        title={formatarData(data)}
        onPress={() => setMostrarPicker(true)}
      />

      {mostrarPicker && (
        <DateTimePicker
          value={data}
          mode="date"
          display="spinner"
          onChange={(event, selectedDate) => {
            setMostrarPicker(false);
            if(selectedDate) setData(selectedDate);
          }}
        />
      )}

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