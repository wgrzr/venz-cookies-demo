import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CustomHeader from "~/components/CustomHeader";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(root)"
        options={{ header: () => <CustomHeader /> }}
      />
      <Stack.Screen name="auth" options={{ presentation: "modal" }} />
    </Stack>
  );
}
