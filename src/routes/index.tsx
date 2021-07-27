import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { AuthNavigation } from "./auth.routes";
import { StackRoutes } from "./stack.routes";
import { useAuth } from "../context/auth";

export function Routes() {
  const { token, loading } = useAuth();
  if (loading) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      {token ? <StackRoutes /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
