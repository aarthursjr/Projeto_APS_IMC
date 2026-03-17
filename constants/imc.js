import { colors } from "./theme";

export const imc_ranges = [
  {
    max: 17,
    label: "Muito abaixo do peso",
    color: colors.grade1,
  },
  {
    max: 18.5,
    label: "Abaixo do peso",
    color: colors.grade2,
  },
  {
    max: 25,
    label: "Peso normal",
    color: colors.grade3,
  },
  {
    max: 30,
    label: "Sobrepeso",
    color: colors.grade4,
  },
  {
    max: 35,
    label: "Obesidade I",
    color: colors.grade5,
  },
  {
    max: 40,
    label: "Obesidade II",
    color: colors.grade6,
  },
  {
    max: 999,
    label: "Obesidade III",
    color: colors.grade7,
  },
];
