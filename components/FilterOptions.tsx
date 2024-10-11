import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FilterOptions = ({
  topIconName,
  topIconSize,
  bottomIconName,
  bottomIconSize,
  filterOptionName,
}: FilterOptionsProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 7,
      }}
    >
      <Ionicons name={topIconName} size={topIconSize} color={"#ff9632"} />
      <Text
        style={{
          flex: 1,
          textTransform: "capitalize",
          fontSize: 18,
        }}
      >
        {filterOptionName}
      </Text>
      <Ionicons
        onPress={() => console.log("heellloo")}
        name={bottomIconName}
        size={bottomIconSize}
        color={"#ff9632"}
      />
    </View>
  );
};

export default FilterOptions;
