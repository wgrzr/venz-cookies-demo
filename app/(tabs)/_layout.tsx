import {
  Cookie,
  Star,
  ReceiptText,
  Home,
  CircleUserRound,
} from "~/components/Icons";
import { Stack, Tabs } from "expo-router";
import * as React from "react";
import { ThemeToggle } from "~/components/ThemeToggle";
import { ModalToggle } from "~/components/ModalToggle";
import { useClientOnlyValue } from "~/components/useClientOnlyValue";

const tabItemSpacing = 4;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarLabelPosition: "below-icon", headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={16} />,
          tabBarIconStyle: { marginTop: tabItemSpacing },
          tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ color }) => <ReceiptText color={color} size={16} />,
          tabBarIconStyle: { marginTop: tabItemSpacing },
          tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
      <Tabs.Screen
        name="signIn"
        options={{
          title: "Sign In",
          tabBarIcon: ({ color }) => (
            <CircleUserRound color={color} size={16} />
          ),
          tabBarIconStyle: { marginTop: tabItemSpacing },
          tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
      {/* <Tabs.Screen
        name="rewards"
        // options={{
        //   title: "Rewards",
        //   headerRight: () => <ThemeToggle />,
        //   tabBarIcon: ({ color, size }) => (
        //     <Star color={color} size={size} className="text-foreground" />
        //   ),
        // }}
      /> */}
    </Tabs>
  );
}
