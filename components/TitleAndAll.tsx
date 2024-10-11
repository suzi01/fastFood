import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const TitleAndAll = ({ title, handleButtonPress }: TitleAndAllProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={handleButtonPress}>
        <Text style={{ fontSize: 14, color: "blue" }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TitleAndAll;
