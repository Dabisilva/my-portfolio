import React from "react";
import { Text, View, ScrollView } from "react-native";
import { useRem } from "responsive-native";
import { Header } from "../../components/Header";
import IconGameplay from "../../assets/iconGameplay.png";
import IconPlantmanager from "../../assets/iconPlantManager.png";
import { openURL } from "expo-linking";

import { useModal } from "../../context/modal";
import { useAuth } from "../../context/auth";
import { ModalSignOut } from "../../components/ModalSignOut";
import { AppButton } from "../../components/AppButton";

import { styles } from "./styles";

export function Home() {
  const rem = useRem();

  const { user } = useAuth();
  const { modalSignOut } = useModal();

  function handleGoToGamePlay() {
    openURL("exp://exp.host/@dabisilvaab/gameplay");
  }

  function handleGoToPlantManager() {
    openURL("exp://exp.host/@dabisilvaab/plantmanager");
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ margin: rem(1, true) }}>
        <Text style={[styles.text, { fontSize: rem(1, true) }]}>
          Olá {user.name}
        </Text>
      </View>
      <View style={styles.body}>
        <Text
          style={[
            styles.title,
            { fontSize: rem(1.5, true), marginVertical: rem(2, true) },
          ]}
        >
          Projetos recentes
        </Text>

        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: rem(2, true) },
          ]}
        >
          <AppButton image={IconGameplay} onPress={handleGoToGamePlay}>
            Aplicação usando typescript, expo, oauth com api do Discord
          </AppButton>
          <AppButton image={IconPlantmanager} onPress={handleGoToPlantManager}>
            Aplicação usando typescript, expo e push notifications
          </AppButton>
        </ScrollView>
      </View>

      <ModalSignOut visible={modalSignOut} />
    </View>
  );
}
