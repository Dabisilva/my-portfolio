import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScreenProvider } from "responsive-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/auth";
import { ModalProvider } from "./src/context/modal";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={13}>
        <StatusBar style="light" translucent animated />
        <AuthProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </AuthProvider>
      </ScreenProvider>
    </SafeAreaProvider>
  );
}
