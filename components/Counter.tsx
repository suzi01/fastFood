import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface CounterProps {
  onIncrease: () => void;
  onDecrease: () => void;
  starterNumber: number;
}

const Counter = ({ onIncrease, onDecrease, starterNumber }: CounterProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors["off-white"],
        borderRadius: 20,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          borderRadius: 50,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onDecrease}
      >
        <Ionicons name="remove" size={15} />
      </TouchableOpacity>
      <Text>{starterNumber}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#ff9632",
          borderRadius: 50,
          padding: 10,

          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onIncrease}
      >
        <Ionicons name="add" size={15} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
