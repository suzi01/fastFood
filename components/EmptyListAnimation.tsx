import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

interface EmptyListAnimationProps {
  title: string;
  animationName: AnimationKeys;
}

export type AnimationKeys = "noOrders" | "noFavourites";

const animations: Record<AnimationKeys, any> = {
  noOrders: require("../lottie/no-orders.json"),
  noFavourites: require("../lottie/no-favourites.json"),
  // success: require("../assets/success.json"),
};

const EmptyListAnimation = ({
  title,
  animationName,
}: EmptyListAnimationProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        style={{ height: 300 }}
        source={animations[animationName]}
        autoPlay
        loop
      />
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Robot-Medium",
          fontSize: 18,
          textTransform: "capitalize",
          marginTop: 20,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default EmptyListAnimation;
