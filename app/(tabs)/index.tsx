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

// import { ScrollView } from "react-native-gesture-handler";

export default function HomeTab() {
  const width = Dimensions.get("window").width;
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView className="flex-1 bg-white">
      {/* bg image */}
      <View className="flex-1 relative h-40 bg-white">
        <Image
          source={require("~/assets/images/flatCookiesBgPinkSmall.jpg")}
          resizeMode="cover"
        />
      </View>
      {/* bg title */}
      <View className="absolute top-20 flex-1 text-white justify-center items-center p-12">
        <Text className="font-bold text-6xl text-white">
          Ready for your afternoon delight?
        </Text>
      </View>

      {/* cards */}
      <View className="mt-52 items-center gap-10 flex-col">
        {/* card 1 */}
        <Card className="w-full max-w-sm rounded-2xl   bg-white flex-1 ">
          <CardHeader className="p-8">
            <CardTitle>
              <Text className="text-4xl font-bold">Dreaming of us?</Text>
            </CardTitle>
            <CardDescription>
              Our cookies bring a smile to anyone's face. When you have it built
              just the way you like, how could you resist? View our cookie menu
              and pick out a new favorite!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">
              <Text>Order Now</Text>
            </Button>
          </CardContent>
          <View className="overflow-hidden h-60">
            <Image source={require("~/assets/images/flatCookiesBgWhite.jpg")} />
          </View>
        </Card>

        {/* card 2 */}
        <View className="pb-6">
          <Card className="w-full max-w-sm overflow-hidden">
            <Image
              source={require("~/assets/images/cookieStackBlueSm.jpg")}
              // style={{ resizeMode: "cover", height: 300 }}
            />
            <CardHeader>
              <CardTitle>
                <Text>Are you a Cookie Rewards Member?</Text>
              </CardTitle>
              <CardDescription>
                Sign up for our Cookie Points loyalty program and get a free box
                of delicious cookies instantly with your first purchase as a
                member!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">
                <Text>Sign Up Now</Text>
              </Button>
            </CardContent>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
