export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { Stack, useNavigation } from "expo-router";
import { useClientOnlyValue } from "~/components/useClientOnlyValue";
import CustomHeader from "~/components/CustomHeader";

export default function RootLayout() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: useClientOnlyValue(false, true),
    });
  }, []);

  return (
    <Stack initialRouteName="tabs">
      <Stack.Screen
        name="(tabs)"
        // options={{ title: "Home", headerShown: false }}
        options={{ title: "Home", header: () => <CustomHeader /> }}
      />
      <Stack.Screen name="modal" options={{ title: "Sign In" }} />
    </Stack>
  );
}
