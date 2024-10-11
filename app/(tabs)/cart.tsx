import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BasketItemCard from "@/components/BasketItemCard";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ItemAndAmount from "@/components/ItemAndAmount";
import { deliveryPrice, images } from "@/constants";
import { router } from "expo-router";
import { useCart } from "@/context/CartContext";
import { getTotal } from "@/lib/utils";

const cart = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { cart } = useCart();

  const totalAndDelivery = (
    getTotal(cart) + cart.length > 0 ? deliveryPrice : 0.0
  ).toFixed(2);

  return (
    <GestureHandlerRootView>
      <SafeAreaView edges={["top"]}>
        <View
          style={{
            height: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "#fff",
                padding: 5,
                borderRadius: 40,
                marginLeft: 10,
              }}
            >
              <Ionicons name="chevron-back" size={27} color="#ff9632" />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: "Roboto-Medium",
                  color: "#ff9632",
                }}
              >
                Your Basket
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 12,
              marginHorizontal: 15,
              marginTop: 20,
              paddingBottom: 290,
            }}
          >
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <BasketItemCard
                  itemImage={item.itemImage}
                  itemName={item.itemName}
                  itemAmount={item.itemAmount}
                  itemPrice={item.itemPrice}
                  extras={item.chosenExtras}
                />
              )}
              ListEmptyComponent={() => (
                <View
                  style={{
                    // backgroundColor: "pink",
                    height: 600,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Image
                    source={images.shoppingCart}
                    style={{
                      width: 200,
                      height: 200,
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Basket is Empty!
                  </Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={
                {
                  // paddingBottom: 200,
                }
              }
            />
          </View>
          {cart.length > 0 && (
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={["35%"]}
              handleIndicatorStyle={{ display: "none" }}
            >
              <View
                style={{
                  marginHorizontal: 15,
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto-Medium",
                    fontSize: 20,
                    marginBottom: 15,
                  }}
                >
                  Order Summary
                </Text>
                <ItemAndAmount
                  item={"Food Total"}
                  amount={getTotal(cart).toFixed(2)}
                />
                <ItemAndAmount
                  item={"Delivery"}
                  amount={cart.length > 0 ? deliveryPrice.toFixed(2) : "0.00"}
                />
                <ItemAndAmount item={"Discount"} amount={"0"} />

                <Text
                  ellipsizeMode="clip"
                  numberOfLines={1}
                  accessible={false}
                  style={{ color: "#C0C0C0" }}
                >
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - - - -
                </Text>
                <ItemAndAmount
                  item={"Total Amount"}
                  amount={totalAndDelivery}
                />
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    backgroundColor: "#ff9632",
                    padding: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => console.log("Process order")}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Roboto-Regular",
                      fontSize: 16,
                    }}
                  >
                    Process Order
                  </Text>
                </TouchableOpacity>
              </View>
            </BottomSheet>
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    flex: 1,
  },
  flexContainer: {
    backgroundColor: "#ededed",
    width: 120,
    height: 180,
    borderWidth: 1,
    margin: 10,
  },
  example: {
    height: 25,
    marginBottom: 5,
    backgroundColor: "#666666",
  },
});

export default cart;
