import {
  Cookie,
  Star,
  ReceiptText,
  Home,
  CircleUserRound,
  Gift,
} from "~/components/Icons";
import {
  Redirect,
  Stack,
  Tabs,
  router,
  useNavigation,
  useRouter,
} from "expo-router";
import * as React from "react";
import CustomHeader from "~/components/CustomHeader";
import { useAuth } from "@clerk/clerk-expo";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function TabsLayout() {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarLabelPosition: "below-icon",
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
        name="menu"
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
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Gift className="text-foreground" color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            if (!isSignedIn) {
              router.push("/signIn");
            } else {
              router.push("/rewards");
            }
          },
        })}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: isSignedIn ? "Profile" : "Sign In",
          tabBarIcon: ({ color }) => (
            <CircleUserRound className="text-foreground" color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            if (!isSignedIn) {
              router.push("/signIn");
            } else {
              router.push("/profile");
            }
          },
        })}
      />
    </Tabs>
  );
}
