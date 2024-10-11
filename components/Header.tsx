import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = ({
  location,
  onLocationPress,
  onNotificationPress,
  onFavouritesPress,
}: HeaderProps) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name={"location"} size={30} color="#ffae3e" />
        <View style={{ flex: 1, gap: 2, marginLeft: 5 }}>
          <Text>Location</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                textTransform: "capitalize",
              }}
            >
              {location}
            </Text>
            <TouchableOpacity style={{}} onPress={onLocationPress}>
              <Ionicons
                name={"chevron-down-outline"}
                size={25}
                color="#ffae3e"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 50,
            }}
            onPress={onNotificationPress}
          >
            <Ionicons
              name={"notifications-outline"}
              size={25}
              color="#ffae3e"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 50,
            }}
            onPress={onFavouritesPress}
          >
            <Ionicons name={"heart-outline"} size={25} color="#ffae3e" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
