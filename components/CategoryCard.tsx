import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import Burger from "../assets/images/chicken-burger-crispy.png";

const CategoryCard = ({
  imageSrc,
  handleCardPress,
  cardText,
  selectedCard,
  type,
}: CategoryCardProps) => {
  const [selected, setSelected] = useState("");
  return (
    <TouchableOpacity
      onPress={() => handleCardPress(cardText)}
      style={{
        // marginRight: 10,
        width: type === "pictures" ? 120 : 100,
        height: "auto",
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
          borderRadius: type === "pictures" ? 15 : 5,
          backgroundColor: cardText === selectedCard ? "#ffae3e" : "#fff",
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 5,
        }}
      >
        {imageSrc && (
          <Image
            source={imageSrc}
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              paddingBottom: 10,
            }}
          />
        )}
        <Text
          style={{
            fontFamily: "Roboto-Regular",
            marginBottom: 5,
            paddingBottom: 5,
            color: cardText === selectedCard ? "#fff" : "#000",
            marginTop: type === "text" ? 10 : 0,
          }}
        >
          {cardText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
