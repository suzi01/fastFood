import { View, Text, TextInput } from "react-native";
import React from "react";

const search = () => {
  return (
    <View style={{}}>
      <View
        style={{
          padding: 10,
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
          }}
          placeholder="Search for drinks, food and more..."
        />
      </View>
      <Text style={{ textAlign: "center", padding: 20 }}> No items found</Text>
    </View>
  );
};

export default search;
