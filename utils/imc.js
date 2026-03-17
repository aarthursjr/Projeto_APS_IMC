import { imc_ranges } from "../constants/imc";

export function classifyIMC(imc) {
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

export function getIdealWeight(imc, altura) {
  if (imc < 18.5) {
    let pesoIdeal = 18.5 * altura ** 2;
    return "Seu peso mínimo ideal é de " + pesoIdeal.toFixed(2) + "Kg";
  } else if (imc > 24.99) {
    let pesoIdeal = 24.99 * altura ** 2;
    return "Seu peso máximo ideal é de " + pesoIdeal.toFixed(2) + "Kg";
  } else {
    return "Você está no peso ideal. Parabéns!";
  }
}

export function getIMCColor(imc) {
  for (let i = 0; i < imc_ranges.length; i++) {
    if (imc < imc_ranges[i].max) {
      return imc_ranges[i].color;
    }
  }

  return null;
}
