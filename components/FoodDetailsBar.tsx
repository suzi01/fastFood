import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const FoodDetailsBar = ({
  iconName,
  title,
  itemAmount,
  iconSize,
  iconColor
}: FoodDetailBarProps) => {
  return (
    <View>
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto-Bold",
          fontSize: 18,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
        <Text>{itemAmount}</Text>
      </View>
    </View>
  );
};

export default FoodDetailsBar;
