import { Image, View, Text } from "react-native";
import React, { PropsWithoutRef } from "react";
import { ScrollView } from "react-native";
import { cn } from "~/lib/utils";
import { Link } from "expo-router";
import { Card } from "~/components/ui";

type CategoryItem = {
  name: string;
  img: string;
};

type MainCategorySectionData = CategoryItem[];

type MainCategorySectionProps = {
  data: MainCategorySectionData;
  title: string;
  headerTitle?: boolean;
  cardColor?: string;
};

const CategoryCard = ({
  img,
  name,
  linkTo,
  cardColor,
  ...props
}: {
  img?: string;
  name?: string;
  linkTo?: string;
  cardColor?: string;
}) => (
  <Card
    className={cn(
      "rounded-xl flex items-center justify-center mr-4 w-[150px] h-[190px] mb-4",
      cardColor ? `bg-[${cardColor}]` : ""
    )}
    {...props}
  >
    <Image
      source={{ uri: img }}
      className="w-[100px] h-[100px] color-white invert-0"
    />
    <Text>{name}</Text>
  </Card>
);

export default function CategorySection({
  data,
  title,
  headerTitle,
  cardColor,
  ...props
}: MainCategorySectionProps) {
  return (
    <View className="mb-8 mx-4">
      {/* Category Header*/}
      <View className="px-4 pt-4 flex-row justify-between items-end">
        <Text
          className={cn(
            "text-[#380f0f] font-bold uppercase",
            headerTitle ? "text-4xl" : "text-xl"
          )}
        >
          {title}
        </Text>
        <Link href={"/tabs/(tabs)/order"} className="text-xs">
          See All
        </Link>
      </View>

      {/* Category cards */}

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item: any, index: any) => (
          <CategoryCard
            img={item.img}
            name={item.name}
            key={index}
            cardColor={cardColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}
