import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import Counter from "@/components/Counter";
import AdditionalCheckboxes from "@/components/AdditionalCheckboxes";
import FoodDetailsBar from "@/components/FoodDetailsBar";
import ExpandableText from "@/components/ExpandableText";
import { useGetMenuItem } from "@/hooks/useGetMenuItem";
import Toast from "react-native-root-toast";
import { CartActionKind, useCart } from "@/context/CartContext";
import { getMenuItemAndExtras } from "@/services/apiMenuItems";

const fakeExtras = [
  {
    id: 1,
    extra: "More ham",
    price: "1.40",
    size: 20,
  },
  {
    id: 2,
    extra: "Spicy",
    price: "1.50",
    size: 20,
  },
  {
    id: 3,
    extra: "Add Egg",
    price: "1.70",
    size: 20,
  },
  {
    id: 4,
    extra: "Add Cheese",
    price: "2.00",
    size: 20,
  },
  {
    id: 5,
    extra: "More cheese",
    price: "1.20",
    size: 20,
  },
];

const fakeDetails = [
  {
    iconName: "star",
    title: "Ratings",
    itemAmount: "4.8",
    iconSize: 20,
  },
  {
    iconName: "alarm",
    title: "Time",
    itemAmount: "12 mins",
    iconSize: 20,
  },
  {
    iconName: "flame",
    title: "Calories",
    itemAmount: "120 Kcals",
    iconSize: 20,
  },
];

interface ItemPriceAndName {
  name: string;
  price: string;
  image: string;
}

const details = ({
  id,
  name,
  description,
  price,
  rating,
  category,
  itemImage,
}: DetailsPageProps) => {
  const [counterAmount, setCounterAmount] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<SelectedExtras[]>([]);
  const [favourited, setFavourited] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const { menuItemState, getItemDetails } = useGetMenuItem();
  const { id: passedId } = useLocalSearchParams();

  const { dispatch } = useCart();

  useEffect(() => {
    getItemDetails(passedId ? passedId.toString() : "");
  }, []);

  // console.log(menuItemState.result);

  const handleIncrease = () => {
    setCounterAmount(counterAmount + 1);
  };

  const handleDecrease = () => {
    if (counterAmount > 1) {
      setCounterAmount(counterAmount - 1);
    }
  };

  const handleExtras = (isChecked: boolean, newExtras: SelectedExtras) => {
    if (isChecked) {
      setSelectedExtras([...selectedExtras, newExtras]);
    } else {
      setSelectedExtras((oldExtras) => {
        return oldExtras.filter((extras) => extras.id != newExtras.id);
      });
    }
  };

  const handleAddToBasket = ({ name, price, image }: ItemPriceAndName) => {
    const addItemToBasket = {
      itemName: name,
      itemImage: image,
      itemAmount: counterAmount,
      itemPrice: price,
      chosenExtras: selectedExtras,
    };
    dispatch({
      type: CartActionKind.ADD_ITEM,
      payload: { item: addItemToBasket },
    });
    Toast.show(`${name} added to basket!`, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
    });

    // console.log(addItemToBasket);
    router.push("/(tabs)/menu");
  };

  return (
    <GestureHandlerRootView>
      <View
        style={{
          height: "100%",
        }}
      >
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
            onPress={() => {
              console.log(favourited);
              setFavourited(!favourited);
            }}
            style={{
              backgroundColor: "white",
              borderRadius: 80,
              padding: 10,
            }}
          >
            {favourited ? (
              <Ionicons name="heart" size={25} color={"#ff9632"} />
            ) : (
              <Ionicons name="heart-outline" size={25} color={"#ff9632"} />
            )}
          </TouchableOpacity>
        </View>
        {menuItemState.type === "loaded" && (
          <View
            style={{
              marginTop: 100,
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        )}
        {menuItemState.type === "loaded" && (
          <>
            <Image
              source={{
                uri: menuItemState.result.item_image,
              }}
              // resizeMode="contain"
              style={{
                // backgroundColor: "yellow",
                position: "absolute",
                top: 0,
                width: "100%",
                height: 340,
                padding: 0,
              }}
            />

            <BottomSheet
              ref={bottomSheetRef}
              handleIndicatorStyle={{ display: "none" }}
              snapPoints={["65%", "80%"]}
              index={0}
              style={{
                paddingHorizontal: 10,
              }}
            >
              {/* TODO 
          scrollview not working on android, adding marginbottom to input component helps but may not be best solution */}
              <BottomSheetScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 8 }}
              >
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto-Medium",
                        fontSize: 24,
                        width: "40%",
                      }}
                    >
                      {menuItemState.result.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 25,
                        fontFamily: "Roboto-Medium",
                        color: "#ff9632",
                      }}
                    >
                      £{menuItemState.result.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Counter
                      starterNumber={counterAmount}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginHorizontal: 20,
                      marginVertical: 20,
                    }}
                  >
                    {fakeDetails.map((detail) => (
                      <FoodDetailsBar
                        iconColor="#ffae3e"
                        iconName={detail.iconName}
                        title={detail.title}
                        itemAmount={detail.itemAmount}
                        iconSize={detail.iconSize}
                      />
                    ))}
                  </View>
                </View>
                <ExpandableText
                  description={menuItemState.result.description}
                />

                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: 5,
                    fontFamily: "Roboto-Medium",
                    marginTop: 15,
                    // marginLeft: 5,
                  }}
                >
                  Add Extra Additionals
                </Text>
                {menuItemState.result.additionals.map((extra) => (
                  <AdditionalCheckboxes
                    id={extra.id}
                    extra={extra.name}
                    itemText={extra.price}
                    size={20}
                    handleChecked={(isChecked: boolean) =>
                      handleExtras(isChecked, {
                        id: extra.id,
                        name: extra.name,
                        price: extra.price,
                      })
                    }
                    type={"textBottom"}
                  />
                ))}
                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: 10,
                    fontFamily: "Roboto-Medium",
                  }}
                >
                  Add note
                </Text>
                <TextInput
                  multiline
                  style={{
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 100,
                  }}
                  placeholder="Write note"
                />
              </BottomSheetScrollView>
            </BottomSheet>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 90,
                width: "100%",
                backgroundColor: Colors["off-white"],
                zIndex: 100,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 15,
                  backgroundColor: "#ff9632",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 30,
                }}
                onPress={() =>
                  handleAddToBasket({
                    name: menuItemState.result.name,
                    price: menuItemState.result.price,
                    image: menuItemState.result.item_image,
                  })
                }
              >
                <Ionicons name="bag" size={20} color={"#fff"} />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontFamily: "Roboto-Medium",
                    textTransform: "capitalize",
                  }}
                >
                  Add to basket
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default details;
