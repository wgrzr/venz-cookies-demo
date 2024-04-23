import { View, Text } from "react-native";
import React from "react";
import { Button } from "../components/ui";
import { H1 } from "../components/ui/typography";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="bg-[#cbc5f1] h-full flex items-center justify-center">
      <View className="flex items-center justify-center h-60">
        <Text className="text-amber-950 font-bold text-4xl ">
          TAKE A BREAK,
        </Text>
        <Text className="text-amber-950 font-bold text-4xl">
          SAVOR A BAKED COOKIE
        </Text>
      </View>
      <Button className="border-amber-950 bg-transparent border-2" size="sm">
        <Link href="/(tabs) " className="text-lg font-bold">
          GET STARTED
        </Link>
      </Button>
    </View>
  );
}
