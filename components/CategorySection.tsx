import { Image, View, Text } from "react-native";
import React, { PropsWithoutRef } from "react";
import { ScrollView } from "react-native";
import { cn } from "~/lib/utils";
import { Link } from "expo-router";
import { Card } from "~/components/ui";
import { Container } from "~/components/Section";

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
      "rounded-xl flex items-center justify-center mx-2 w-[150px] h-[200px] ",
      cardColor ? `bg-[${cardColor}]` : "bg-white"
    )}
    {...props}
  >
    <Image source={{ uri: img }} className="w-[100px] h-[100px] " />
    <Text>{name}</Text>
  </Card>
);

export default function CategorySlider({
  data,
  title,
  headerTitle,
  cardColor,
  ...props
}: MainCategorySectionProps) {
  return (
    <Container>
      {/* Header*/}
      <Container className="flex-row justify-between items-center">
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
      </Container>

      {/* Category cards */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 0, paddingVertical: 10 }}
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
    </Container>
  );
}
