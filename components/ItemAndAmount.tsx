import { View, Text } from "react-native";
import React from "react";

const ItemAndAmount = ({ item, amount, numItems }: ItemAndAmountProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginLeft: 5,
        marginBottom: 5,
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Light",
          fontSize: 16,
        }}
      >
        {numItems}
        {numItems && "X "}
        {item}
      </Text>
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          fontSize: 16,
        }}
      >
        £{amount}
      </Text>
    </View>
  );
};

export default ItemAndAmount;
