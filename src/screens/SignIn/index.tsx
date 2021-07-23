import React from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import { useRem } from "responsive-native";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import MeImage from "../../assets/me.jpg";

import { useAuth } from "../../context/auth";
import { styles } from "./styles";
import { theme } from "../../utils/theme";

export function SignIn() {
  const { signIn, loading } = useAuth();
  const rem = useRem();
  return (
    <View style={styles.container}>
      <Image
        source={MeImage}
        style={{
          width: "90%",
          height: rem(20, true),
          borderRadius: rem(1, true),
        }}
      />
      <Text style={[styles.text, { fontSize: rem(2, true) }]}>
        Seja bem vindo ao meu portfólio
      </Text>

      {loading ? (
        <ActivityIndicator color={theme.colors.red} size="large" />
      ) : (
        <View style={{ paddingHorizontal: rem(5, true) }}>
          <RectButton
            onPress={signIn}
            style={[
              styles.button,
              {
                paddingHorizontal: rem(2, true),
                height: rem(3, true),
                borderRadius: rem(0.5, true),
              },
            ]}
          >
            <AntDesign
              name="github"
              size={rem(1.5, true)}
              color={theme.colors.heading}
            />
            <Text style={[styles.textButton, { fontSize: rem(1, true) }]}>
              Login
            </Text>
          </RectButton>
        </View>
      )}
    </View>
  );
}
