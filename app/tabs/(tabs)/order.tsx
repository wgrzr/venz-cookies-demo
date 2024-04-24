import * as React from "react";
import { Image, ScrollView, View } from "react-native";
import CategorySection from "~/components/CategorySection";
import { MainCategorySection, CookieBase } from "~/assets/data/ordersPage";
import { Button, Card, Text } from "~/components/ui";
import { Section } from "~/components/Section";
import PromoCard from "~/components/PromoCard";
import CategorySlider from "~/components/CategorySection";

export default function OrderPage() {
  return (
    <ScrollView className="bg-[#f1f2f6]">
      <Section>
        <PromoCard />
      </Section>
      <Section>
        <CategorySlider
          data={MainCategorySection}
          title="CATEGORIES"
          headerTitle
          cardColor="#cbc5f1"
        />
      </Section>
      <Section>
        <CategorySlider data={CookieBase} title="COOKIE BASE" />
      </Section>
    </ScrollView>
  );
}
