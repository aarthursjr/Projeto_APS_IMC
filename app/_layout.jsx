import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import { IMCProvider } from "../context/ImcContext";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  useEffect(() => {
    async function setupNavBar() {
      await NavigationBar.setButtonStyleAsync("dark");
    }

    if (Platform.OS === "android") {
      setupNavBar();
    }
  }, []);

  return (
    <IMCProvider>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </IMCProvider>
  );
}
