import { View, Text } from "react-native";
import React from "react";
import { Section } from "~/components/Section";
import { Button, Card } from "~/components/ui";

export default function PromoCard() {
  return (
    <View className="flex items-center px-4  justify-around">
      <Card className="flex-row h-40 w-full bg-[#cbc5f1] items-center my-5">
        <View className="mr-10 rounded-full w-[100px] h-[100px] bg-white ml-10 flex items-center justify-center">
          <Text>Promo Image</Text>
        </View>
        <View className="flex items-center justify-center ">
          <View className="pb-2">
            <Text className="text-amber-950 text-5xl font-bold">30% OFF</Text>
            <Text className="text-amber-950 text-2xl">SPECIAL FOR TODAY</Text>
          </View>
          <Button variant="outline" size="sm" className="w-full  bg-amber-950 ">
            <Text className="text-white">TASTE NOW</Text>
          </Button>
        </View>
      </Card>
      <View className="flex-row space-x-2 justify-center  w-full flex-1">
        <View className="w-2 h-2 rounded-full bg-gray-300 m-1" />
        <View className="w-2 h-2 rounded-full bg-gray-300 m-1" />
        <View className="w-2 h-2 rounded-full bg-gray-300 m-1" />
      </View>
    </View>
  );
}
