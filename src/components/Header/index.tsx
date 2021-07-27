import React from "react";

import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../../utils/theme";
import { useModal } from "../../context/modal";

import { styles } from "./styles";

export function Header() {
  const rem = useRem();
  const { handleSetModalValue } = useModal();
  return (
    <View style={[styles.container, { width: "100%", height: rem(5, true) }]}>
      <View />
      <Text style={[styles.text, { fontSize: rem(2, true) }]}>Portfólio</Text>

      <RectButton onPress={() => handleSetModalValue(true)}>
        <FontAwesome name="sign-out" size={24} color={theme.colors.red} />
      </RectButton>
    </View>
  );
}
