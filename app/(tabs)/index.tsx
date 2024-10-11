import AdCard from "@/components/AdCard";
import CategoryCard from "@/components/CategoryCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { foodCategories, recommendations } from "@/constants";
import { useEffect, useState } from "react";
import Recommendations from "@/components/Recommendations";
import Header from "@/components/Header";
import TitleAndAll from "@/components/TitleAndAll";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMenuItems } from "@/services/apiMenuItems";

export default function HomeScreen() {
  const [selected, setSelected] = useState("Burgers");
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handleSearchFocus = (isFocused: boolean) => {
    setScrollEnabled(!isFocused);
  };

  const doSomething = (val: string) => {
    setSelected(val);
    console.log(val);
  };

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true}>
        <Header
          location="birmingam, united kindom"
          onLocationPress={() => console.log("open location")}
          onNotificationPress={() => console.log("open notifications")}
          onFavouritesPress={() => router.push("/favourites")}
        />

        <View
          style={{
            gap: 10,
            marginHorizontal: 20,
            paddingTop: 10,
            marginTop: 10,
          }}
        >
          <AdCard
            handleCardButtonPress={() => console.log("helo")}
            cardText="grab our exclusive food discount now!"
            buttonText="Go Now!"
          />
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              fontSize: 18,
            }}
          >
            Categories
          </Text>

          <View style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {foodCategories.map((category) => (
                <View key={category.id.toString()} style={{ marginRight: 15 }}>
                  <CategoryCard
                    selectedCard={selected}
                    imageSrc={category.image}
                    handleCardPress={(val: string) => {
                      doSomething(val);
                    }}
                    cardText={category.title}
                    type={"pictures"}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          <TitleAndAll
            title="Recommendations"
            handleButtonPress={() =>
              router.push({
                pathname: "/[id]",
                params: { id: "recommendations" },
              })
            }
          />
          <View style={{}}>
            <ScrollView horizontal>
              {recommendations.map((item, index) => (
                <View key={item.id} style={{ marginRight: 15 }}>
                  <Recommendations
                    id={item.id}
                    handleClick={() =>
                      router.push({
                        // pathname: "/(edit)/[id]",
                        pathname: "/(details)/[id]",
                        params: { id: item.id },
                      })
                    }
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    category={item.category}
                    itemImage={item.itemImage}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <TitleAndAll
            title="Top Picks"
            handleButtonPress={() =>
              router.push({
                pathname: "/[id]",
                params: { id: "top picks" },
              })
            }
          />
          <View style={{}}>
            <ScrollView horizontal>
              {recommendations.map((item, index) => (
                <View key={item.id.toString()} style={{ marginRight: 15 }}>
                  <Recommendations
                    id={item.id}
                    handleClick={() =>
                      router.push({
                        // pathname: "/(edit)/[id]",
                        pathname: "/(details)/[id]",
                        params: { id: item.id },
                      })
                    }
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    category={item.category}
                    itemImage={item.itemImage}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <TitleAndAll
            title="Last ordered"
            handleButtonPress={() =>
              router.push({
                pathname: "/[id]",
                params: { id: "last ordered" },
              })
            }
          />
          <View style={{}}>
            <ScrollView horizontal>
              {recommendations.map((item, index) => (
                <View key={item.id.toString()} style={{ marginRight: 15 }}>
                  <Recommendations
                    id={item.id}
                    handleClick={() =>
                      router.push({
                        // pathname: "/(edit)/[id]",
                        pathname: "/(details)/[id]",
                        params: { id: item.id + 1 },
                      })
                    }
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    category={item.category}
                    itemImage={item.itemImage}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
