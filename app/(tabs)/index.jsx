import Header from "../../components/Header";

export default function HomeScreen({ navigation }) {
  return (
    <Header
      image={"../assets/logo-64x64.png"}
      title="Meu IMC"
      subtitle="Gerencie seu índice de massa corporal"
    />
  );
}
