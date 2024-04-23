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
import { Cookie, SearchIcon } from "lucide-react-native";

const SearchBar = () => (
  <View className=" bg-white pb-6">
    <View className="flex-row gap-2 flex-1 px-6 items-center">
      <View className="flex-1 bg-gray-100 rounded-lg flex-row items-center">
        {/* <SearchIcon size={20} color="gray" /> */}
        <TextInput
          placeholder="Street Address"
          className="color-gray-500 p-2 text-xs w-full"
        />
      </View>
    </View>
  </View>
);

export default function CustomHeader() {
  return (
    <SafeAreaView className="bg-white flex">
      <View className="flex-1 items-center justify-center flex-col p-4">
        <TouchableOpacity className="pb-4">
          {/* <Cookie size={32} strokeWidth={1.6} color="black" /> */}
        </TouchableOpacity>
        <Text>Good Morning!</Text>
      </View>
      <View className="flex-row gap-[20px] justify-between items-center p-5 bg-white">
        <TouchableOpacity className="flex flex-1">
          <Text className="flex-row">Delivery · Now</Text>
          <View className="flex-row items-center">
            <Text className="text-sm font-bold">Phoenix</Text>
            <ChevronDown size={16} color={"pink"} />
          </View>
        </TouchableOpacity>

        <ModalToggle size={32} />
      </View>
      {/* <SearchBar /> */}
    </SafeAreaView>
  );
}
