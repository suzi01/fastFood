import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

const MenuCard = ({
  id,
  name,
  description,
  price,
  rating,
  category,
  handleClick,
  itemImage,
}: ExtendedRecommendations) => {
  return (
    <TouchableOpacity
      key={id}
      onPress={handleClick}
      style={{
        backgroundColor: "white",
        marginHorizontal: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderRadius: 10,
          gap: 20,
        }}
      >
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Image
            source={{
              uri: itemImage,
            }}
            style={{
              width: 150,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            marginTop: 10,
            marginRight: 10,
            width: "50%",
          }}
        >
          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-between",  }}
          > */}
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            {name}
          </Text>

          {/* </View> */}

          <Text
            numberOfLines={1}
            style={{
              fontFamily: "Roboto-Light",
              marginBottom: 5,
            }}
          >
            {description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Ionicons size={15} name="star" style={{ color: "orange" }} />
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 14,
                }}
              >
                {rating}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Roboto-Medium",
              }}
            >
              £{price}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Ionicons size={15} name="flame" style={{ color: "orange" }} />
              <Text>Calories</Text>
            </View>
            <TouchableOpacity>
              <Ionicons size={15} name="heart" style={{ color: "#fd5c63" }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;
