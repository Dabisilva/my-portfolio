import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "./auth.routes";
import { StackRoutes } from "./stack.routes";

export function Routes() {
  //const { user } = useAuth();

  return (
    <NavigationContainer>
      {/* {user?.token ? <StackRoutes /> : <AuthNavigation />} */}
      <StackRoutes />
      {/* <AuthNavigation /> */}
    </NavigationContainer>
  );
}
