import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const DetailsHeader = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
          paddingHorizontal: 10,
          backgroundColor: "red",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 80,
            padding: 10,
          }}
        >
          <Ionicons name="chevron-back" size={25} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 80,
            padding: 10,
          }}
        >
          <Ionicons name="heart-outline" size={25} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailsHeader;
