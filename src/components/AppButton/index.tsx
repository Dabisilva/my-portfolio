import React, { ReactNode, useEffect } from "react";

import { View, Image, Text, ImageSourcePropType } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { useRem } from "responsive-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";

interface AppButtonProps extends RectButtonProps {
  children: ReactNode;
  image: ImageSourcePropType;
}

export function AppButton({ children, image, ...rest }: AppButtonProps) {
  const rem = useRem();

  return (
    <Animatable.View
      style={{ marginHorizontal: rem(1, true) }}
      animation="flipInY"
      useNativeDriver
    >
      <RectButton
        style={[
          styles.buttonContainer,
          {
            padding: rem(2, true),
            borderRadius: rem(0.3, true),
            marginBottom: rem(2, true),
          },
        ]}
        {...rest}
      >
        <Image
          source={image}
          style={{
            width: rem(5, true),
            height: rem(5, true),
            borderRadius: rem(3, true),
          }}
        />
        <View style={{ width: "60%" }}>
          <Text style={[styles.textButton, { fontSize: rem(1, true) }]}>
            {children}
          </Text>
        </View>
      </RectButton>
    </Animatable.View>
  );
}
