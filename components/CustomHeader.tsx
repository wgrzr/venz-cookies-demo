import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { ModalToggle } from "./ModalToggle";
import { ChevronDown } from "./Icons";
import { Cookie, SearchIcon, Sliders } from "lucide-react-native";
import { Input } from "./ui/input";

export default function CustomHeader() {
  return (
    <SafeAreaView className="bg-white">
      {/* Location dropdown */}
      <View className="flex mb-4">
        <View className="flex-row gap-[20px] justify-between items-center p-4 bg-white">
          <Cookie size={32} strokeWidth={1.6} color="black" />
          <View className="flex-1">
            <Text className="flex-row text-gray-400">Delivery · Now</Text>
            <View className="flex-row items-center">
              <Text className="text-lg font-bold">Phoenix</Text>
              <ChevronDown size={16} color={"black"} />
            </View>
          </View>
          <ModalToggle size={32} />
        </View>

        <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
          {/* search bar */}
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 mr-4 rounded-xl">
            <SearchIcon size={18} color="gray" />
            <TextInput
              keyboardType="default"
              placeholder="Search Location or Street Address"
            />
          </View>

          <View className="pr-[5px]">
            <Sliders color={"purple"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
