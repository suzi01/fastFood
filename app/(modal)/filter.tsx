import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import FilterOptions from "@/components/FilterOptions";
import { Colors } from "@/constants/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AdditionalCheckboxes from "@/components/AdditionalCheckboxes";

const foodCategories = [
  {
    id: 1,
    title: "Burgers",
  },
  {
    id: 2,
    title: "Sandwiches",
  },
  {
    id: 3,
    title: "Fries",
  },
  {
    id: 4,
    title: "Chicken",
  },
  {
    id: 5,
    title: "Drinks",
  },
];

const filter = () => {
  // sort, offers, dietary, customer rating
  return (
    <View style={{ marginTop: 20, height: "100%" }}>
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: "#fff",
        }}
      >
        <FilterOptions
          topIconName="swap-vertical"
          topIconSize={25}
          bottomIconName="chevron-forward"
          bottomIconSize={25}
          filterOptionName="Sort"
        />
        <FilterOptions
          topIconName="pricetags"
          topIconSize={25}
          bottomIconName="chevron-forward"
          bottomIconSize={25}
          filterOptionName="offers"
        />
        <FilterOptions
          topIconName="pizza"
          topIconSize={25}
          bottomIconName="chevron-forward"
          bottomIconSize={25}
          filterOptionName="dietary"
        />
        <FilterOptions
          topIconName="star-half"
          topIconSize={25}
          bottomIconName="chevron-forward"
          bottomIconSize={25}
          filterOptionName="customer rating"
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Roboto-Medium",
          marginVertical: 20,
          marginHorizontal: 10,
        }}
      >
        Categories
      </Text>
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: "#fff",
          paddingLeft: 5,
        }}
      >
        {foodCategories.map((category) => (
          <View key={category.id}>
            <AdditionalCheckboxes
              id={category.id}
              itemText={category.title}
              size={25}
              handleChecked={(isChecked: boolean) => console.log(isChecked)}
              type="textTop"
            />
          </View>
        ))}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 120,
          backgroundColor: "white",
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#ff9632",
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 15,
            gap: 10,
          }}
        >
          <Ionicons name="bag" size={25} color="#fff" />
          <Text
            style={{
              color: "#fff",
              textTransform: "capitalize",
              fontFamily: "Roboto-Medium",
              fontSize: 16,
            }}
          >
            apply filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default filter;
