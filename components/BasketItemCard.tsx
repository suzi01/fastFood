import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import ItemAndAmount from "./ItemAndAmount";

// interface ExtrasProps {
//   extra: string;
//   amount: number;
//   price: string;
// }

interface BasketItemCardProps {
  itemImage: string;
  itemName: string;
  itemAmount: number;
  itemPrice: string;
  extras?: SelectedExtras[];
}

const BasketItemCard = ({
  itemImage,
  itemAmount,
  itemName,
  itemPrice,
  extras,
}: BasketItemCardProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          source={{
            uri: itemImage,
          }}
        />
      </View>

      <View
        style={{
          flex: 3,
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            padding: 5,
            marginBottom: 5,
            fontFamily: "Roboto-Medium",
          }}
        >
          {itemName}
        </Text>
        <View
          style={{
            marginLeft: 5,
          }}
        >
          <ItemAndAmount
            item={itemName}
            amount={itemPrice}
            numItems={itemAmount}
          />
          {extras &&
            extras.map((extra) => (
              <ItemAndAmount
                item={extra.name}
                amount={extra.price}
                numItems={1}
              />
            ))}
          {/* <ItemAndAmount item={"Add Egg"} amount={"1.50"} numItems={1} />
          <ItemAndAmount item={"More Ham"} amount={"1.20"} numItems={1} /> */}
        </View>
      </View>
    </View>
  );
};

export default BasketItemCard;
