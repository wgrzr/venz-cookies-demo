import {
  Cookie,
  Star,
  ReceiptText,
  Home,
  CircleUserRound,
} from "~/components/Icons";
import { Stack, Tabs } from "expo-router";
import * as React from "react";
import CustomHeader from "~/components/CustomHeader";

const tabItemSpacing = 4;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        // header: () => <CustomHeader />,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home className="text-foreground" color={color} />
          ),
          // tabBarIconStyle: { marginTop: tabItemSpacing },
          // tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ color }) => (
            <ReceiptText className="text-foreground" color={color} />
          ),
          // tabBarIconStyle: { marginTop: tabItemSpacing },
          // tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
      <Tabs.Screen
        name="signIn"
        options={{
          title: "Sign In",
          tabBarIcon: ({ color }) => (
            <CircleUserRound color={color} className="text-foreground" />
          ),
          // tabBarIconStyle: { marginTop: tabItemSpacing },
          // tabBarLabelStyle: { marginBottom: tabItemSpacing },
        }}
      />
    </Tabs>
  );
}
