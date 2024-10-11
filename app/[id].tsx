import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { recommendations } from "@/constants";
import MenuCard from "@/components/MenuCard";

const SelctionPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 15,
          paddingHorizontal: 10,
          zIndex: 2,
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: "#fff",
            borderRadius: 80,
            padding: 10,
          }}
        >
          <Ionicons name="chevron-back" size={25} color={"#ff9632"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("hearted")}
          style={{
            backgroundColor: "white",
            borderRadius: 80,
            padding: 10,
          }}
        >
          <Ionicons name="heart-outline" size={25} color={"#ff9632"} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 24,
            textTransform: "capitalize",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          {id}
        </Text>
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={recommendations}
            renderItem={({ item }) => (
              <MenuCard
                handleClick={() => router.push({
                  pathname: "/(details)/[id]",
                  params: { id: item.name },
                })}
                name={item.name}
                description={item.description}
                price={item.price}
                rating={item.rating}
                category={item.category} id={0} 
                itemImage={""}              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120, gap: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default SelctionPage;
