import { useAuth } from "@clerk/clerk-react";
import * as React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import Spinner from "react-native-loading-spinner-overlay";
import { router } from "expo-router";

// import { ScrollView } from "react-native-gesture-handler";

const SignOut = () => {
  const { signOut } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSignOutPress = () => {
    signOut();
    router.dismissAll();
  };

  return (
    <View>
      <Button onPress={onSignOutPress} className="bg-black rounded-full">
        <Text className="text-white">Sign Out</Text>
      </Button>
    </View>
  );
};

export default function ProfileScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-foreground">Profile Screen</Text>
      <SignOut />
    </View>
  );
}
