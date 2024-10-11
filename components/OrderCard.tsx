import {
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React, { Component } from "react";
import {} from "react-native";
import { images } from "@/constants";
import Icon from "react-native-vector-icons/FontAwesome";

const OrderCard = ({ id, status, price }: OrderCardProps) => {
  return (
    <TouchableOpacity
      style={{}}
      onPress={() => console.log("go to last order details")}
    >
      {/* <ImageBackground
        style={{ marginHorizontal: 10 }}
        source={images.foodBackground}
      > */}
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginHorizontal: 20,
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: "#ffae3e",
          backgroundColor: "#fff",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius:60
          }}
          source={images.orderPicture}
        />
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            {status}
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 16,
              marginBottom: 5,
            }}
          >
            £{price}
          </Text>
          <Text
            style={{
              textTransform: "capitalize",
              fontSize: 14,
              marginBottom: 5,
            }}
          >
            06 April 2024
          </Text>
          <TouchableOpacity
            onPress={() => console.log("order again")}
            style={{
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "#eb8d00",
                padding: 10,
                borderRadius: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                gap: 5,
              }}
            >
              <Icon name="repeat" size={15} color="#eb8d00" />
              <Text
                style={{
                  textTransform: "capitalize",
                }}
              >
                order again
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
    </TouchableOpacity>
  );
};

export default OrderCard;
