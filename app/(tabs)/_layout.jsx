import { Tabs } from "expo-router";
import { Calculator, History, House, Info } from "lucide-react-native";
import Tab from "../../components/Tab";

const tabs = {
  index: {
    title: "Início",
    icon: House,
  },
  calculator: {
    title: "Calculadora",
    icon: Calculator,
  },
  history: {
    title: "Histórico",
    icon: History,
  },
  info: {
    title: "Informações",
    icon: Info,
  },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.entries(tabs).map(([name, config]) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarButton: (props) => (
              <Tab
                {...props}
                title={config.title}
                icon={config.icon}
                active={props.accessibilityState?.selected}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
