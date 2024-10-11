import CategoryCard from "@/components/CategoryCard";
import MenuCard from "@/components/MenuCard";
import Recommendations from "@/components/Recommendations";
import SearchBar from "@/components/SearchBar";

import { recommendations } from "@/constants";
import { Colors } from "@/constants/Colors";
import { useGetMenuItems } from "@/hooks/useGetMenuItems";
import { groupByKey } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  const { menuItemDetailsState, getMenuItemDetails } = useGetMenuItems();

  useEffect(() => {
    getMenuItemDetails();
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 24,
            color: Colors["dark-orange"],
            textTransform: "capitalize",
            flex: 1,
            textAlign: "center",
          }}
        >
          Menu
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(modal)/search")}
          style={{
            marginRight: 10,
            backgroundColor: "#fff",
            borderRadius: 50,
            padding: 5,
          }}
        >
          <Ionicons name="search" size={25} color="#ffae3e" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
        }}
      >
        {/* <SearchBar
          data={["Apple", "Banana", "Orange", "Pineapple", "Grape", "Mango"]}
          onFilterClick={() => router.push("/(modal)/filter")}
        /> */}
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        {menuItemDetailsState.type === "loading" && (
          <View
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#eb8d00" />
          </View>
        )}
        {menuItemDetailsState.type === "loaded" && (
          <SectionList
            sections={groupByKey(menuItemDetailsState.result, "category")}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <MenuCard
                  itemImage={item.item_image}
                  handleClick={() =>
                    router.push({
                      pathname: "/(details)/[id]",
                      params: { id: item.id },
                    })
                  }
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                  id={item.id}
                />
              </View>
            )}
            renderSectionHeader={({ section: { category } }) => (
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "Roboto-Medium",
                  fontSize: 22,
                }}
              >
                {category}
              </Text>
            )}
            contentContainerStyle={{ paddingBottom: 160, gap: 10 }}
            stickySectionHeadersEnabled={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
