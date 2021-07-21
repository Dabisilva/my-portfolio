import React from "react";
import { Text, View } from "react-native";
import { useRem } from "responsive-native";
import { styles } from "./styles";

export function Home() {
  const rem = useRem();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: rem(1, true) }]}>Home</Text>
    </View>
  );
}
