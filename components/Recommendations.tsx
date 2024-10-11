import { images } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";

import { TouchableOpacity, View, Image, Text } from "react-native";

import Toast from "react-native-root-toast";

const Recommendations = ({
  handleClick,
  name,
  description,
  price,
  rating,
  category,
}: ExtendedRecommendations) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        // marginRight: 10,
        marginVertical: 5,
        width: 300,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          borderRadius: 10,
        }}
      >
        <View style={{}}>
          <Image
            source={images.hamburger}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              right: 0,
              backgroundColor: "#ff9632",
              borderRadius: 10,
              zIndex: 2,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                left: 10,
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              // marginLeft: 10,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons size={15} name="star" style={{ color: "orange" }} />
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                // marginRight: 10,
              }}
            >
              {rating}
            </Text>
          </View>
        </View>

        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Roboto-Light",
            marginBottom: 5,
            // marginLeft: 10,
          }}
        >
          {description}
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            // marginLeft: 10,
          }}
        >
          £{price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Recommendations;
