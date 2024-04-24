import { View, Text } from "react-native";
import React, { ReactNode, forwardRef } from "react";
import { cn } from "~/lib/utils";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const SectionComponent = forwardRef<View, ContainerProps>(
  ({ className, children, ...props }, ref) => (
    <View className={cn("bg-[#f1f2f6] mb-6 ", className)} {...props}>
      {children}
    </View>
  )
);
SectionComponent.displayName = "Section";

const ContainerComponent = forwardRef<View, ContainerProps>(
  ({ className, children, ...props }, ref) => (
    <View className={cn("px-2 bg-[#f1f2f6]", className)} {...props}>
      {children}
    </View>
  )
);
ContainerComponent.displayName = "Container";

export { SectionComponent as Section, ContainerComponent as Container };
