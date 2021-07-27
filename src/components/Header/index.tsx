import React from "react";

import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "../../utils/theme";
import { useModal } from "../../context/modal";
import { useAuth } from "../../context/auth";

import { styles } from "./styles";

export function Header() {
  const rem = useRem();
  const { user } = useAuth();
  const { handleSetModalValue } = useModal();
  return (
    <View style={[styles.container, { width: "100%", height: rem(5, true) }]}>
      <Image
        source={{ uri: user.avatar_url }}
        style={{
          width: rem(4, true),
          height: rem(4, true),
          borderRadius: rem(3, true),
        }}
      />
      <Text style={[styles.text, { fontSize: rem(2, true) }]}>Portfólio</Text>

      <RectButton onPress={() => handleSetModalValue(true)}>
        <FontAwesome name="sign-out" size={24} color={theme.colors.red} />
      </RectButton>
    </View>
  );
}
