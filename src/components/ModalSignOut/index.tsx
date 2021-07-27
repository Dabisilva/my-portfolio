import React from "react";

import {
  Modal,
  ModalProps,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useRem } from "responsive-native";
import { useAuth } from "../../context/auth";
import { useModal } from "../../context/modal";

import { styles } from "./styles";

export function ModalSignOut({ ...rest }: ModalProps) {
  const { signOut } = useAuth();
  const { handleSetModalValue } = useModal();

  const rem = useRem();

  function logOut() {
    handleSetModalValue(false);
    signOut();
  }
  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <TouchableWithoutFeedback onPress={() => handleSetModalValue(false)}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View
              style={[
                styles.body,
                {
                  marginTop: rem(35, true),
                  marginBottom: rem(2, true),
                  marginHorizontal: rem(1, true),
                  borderRadius: rem(0.5, true),
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  { paddingVertical: rem(2, true), fontSize: rem(1.5, true) },
                ]}
              >
                Deseja Sair?
              </Text>
              <View
                style={[
                  styles.buttonContainer,
                  { paddingHorizontal: rem(2, true) },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSetModalValue(false)}
                  style={[
                    styles.noButton,
                    {
                      width: rem(8, true),
                      height: rem(4, true),
                      borderRadius: rem(0.5, true),
                    },
                  ]}
                >
                  <Text style={styles.textButton}>NÃO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={logOut}
                  style={[
                    styles.yesButton,
                    {
                      width: rem(8, true),
                      height: rem(4, true),
                      borderRadius: rem(0.5, true),
                    },
                  ]}
                >
                  <Text style={styles.textButton}>SIM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
