import { Cookie, Star, ReceiptText, Home } from "~/components/Icons";
import { Tabs } from "expo-router";
import * as React from "react";
import { useColorScheme } from "~/lib/useColorScheme";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function RootLayout() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: () => <Home className="text-foreground" />,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: () => <Cookie className="text-foreground" />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: () => <ReceiptText className="text-foreground" />,
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          headerRight: () => <ThemeToggle />,
          tabBarIcon: () => <Star className="text-foreground" />,
        }}
      />
    </Tabs>
  );
}
