import * as React from "react";
import { Image, ScrollView, View } from "react-native";
import CategorySection from "~/components/CategorySection";
import { MainCategorySection, CookieBase } from "~/assets/data/ordersPage";
import { Button, Card, Text } from "~/components/ui";

export default function OrderPage() {
  return (
    <ScrollView className="bg-[#f1f2f6] py-6">
      {/* Promo Section */}
      <View>
        <View>
          <Card className="flex-row h-40  mx-9 bg-[#cbc5f1] items-center mb-10 mt-6">
            <View className="mr-10 rounded-full w-[100px] h-[100px] bg-white ml-10 flex items-center justify-center">
              <Text>Promo Image</Text>
            </View>
            <View className="flex items-center justify-center ">
              <View className="pb-2">
                <Text className="text-amber-950 text-5xl font-bold">
                  30% OFF
                </Text>
                <Text className="text-amber-950 text-2xl">
                  SPECIAL FOR TODAY
                </Text>
              </View>
              <Button
                variant="outline"
                size="sm"
                className="w-full  bg-amber-950 "
              >
                <Text className="text-white">TASTE NOW</Text>
              </Button>
            </View>
          </Card>
          <View className="flex-row space-x-2 justify-center relative bottom-4">
            <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
            <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
            <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
          </View>
        </View>
        <CategorySection
          data={MainCategorySection}
          title="CATEGORIES"
          headerTitle
          cardColor="#cbc5f1"
        />
        <CategorySection data={CookieBase} title="COOKIE BASE" />
      </View>
    </ScrollView>
  );
}
