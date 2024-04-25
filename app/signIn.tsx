import { useSignUp } from "@clerk/clerk-react";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { H1, Muted } from "~/components/ui/typography";

export default function ModalScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const onSignUpSubmit = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const names = fullName.trim().split(" ");
      const firstName = names[0];
      const lastName = names.slice(1).join(" ");

      await signUp.create({ firstName, lastName, emailAddress });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="p-4 native:pb-24 max-w-md gap-4">
        <View className="gap-1">
          <H1 className="text-foreground text-center">Sign in</H1>
          <Muted className="text-base text-center">
            We'll send you a confirmation code to get started
          </Muted>
        </View>

        {!pendingVerification && (
          <>
            <Input
              autoCapitalize="words"
              placeholder="Enter first and last name"
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
            />

            <Input
              autoCapitalize="none"
              placeholder="name@example.com"
              value={emailAddress}
              onChangeText={(email) => setEmailAddress(email)}
            />

            <Button
              variant={"default"}
              className="rounded-full  bg-black"
              onPress={onSignUpSubmit}
            >
              <Text className="text-white">SEND CONFIRMATION CODE</Text>
            </Button>
          </>
        )}
        {pendingVerification && (
          <>
            <Input
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
            <Button
              variant="default"
              className="rounded-full bg-black"
              onPress={onPressVerify}
            >
              <Text className="text-white">VERIFY EMAIL</Text>
            </Button>
          </>
        )}

        <View className="px-6">
          <Muted className="text-center">
            By proceeding you agree to our{" "}
            <Muted className="underline">Terms and Conditions</Muted> and
            confirm you have read and understand our{" "}
            <Muted className="underline">Privacy Policy</Muted>
          </Muted>
        </View>
      </View>
    </View>
  );
}
