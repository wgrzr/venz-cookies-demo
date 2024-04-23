import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { Stack, useNavigation } from "expo-router";

export default function RootLayout() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen
        name="(tabs)"
        // options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
