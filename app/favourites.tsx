import CategoryCard from "@/components/CategoryCard";
import EmptyListAnimation from "@/components/EmptyListAnimation";
import MenuCard from "@/components/MenuCard";
import { recommendations } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const foodCategoryWords = [
  {
    id: 1,
    title: "All",
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
  {
    id: 6,
    title: "Burgers",
  },
];

const Favourites = () => {
  const [selected, setSelected] = useState("All");

  const doSomething = (val: string) => {
    setSelected(val);
    console.log(val);
  };
  return (
    <SafeAreaView
      style={
        {
          // height: "100%",
        }
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25} color="#ffae3e" />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            marginVertical: 10,
            textAlign: "center",
            fontFamily: "Roboto-Medium",
            fontSize: 24,
            color: Colors["dark-orange"],
            textTransform: "capitalize",
          }}
        >
          My Favourites
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          paddingBottom: 0,
        }}
      >
        {foodCategoryWords.map((category) => (
          <View key={category.id.toString()} style={{ marginRight: 5 }}>
            <CategoryCard
              selectedCard={selected}
              handleCardPress={(val: string) => {
                doSomething(val);
              }}
              cardText={category.title}
              type={"text"}
            />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <FlatList
          data={recommendations}
          renderItem={({ item }) => (
            <MenuCard
              id={item.id}
              handleClick={() =>
                router.push({
                  pathname: "/(details)/[id]",
                  params: { id: item.name },
                })
              }
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
              category={item.category}
              itemImage={item.itemImage}
            />
          )}
          keyExtractor={(item: RecommendationProps) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120, gap: 10 }}
          ListEmptyComponent={() => (
            <View>
              <EmptyListAnimation
                title="You don't have any favourites yet!"
                animationName="noFavourites"
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

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
