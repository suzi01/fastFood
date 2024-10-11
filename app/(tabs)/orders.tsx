import EmptyListAnimation from "@/components/EmptyListAnimation";
import OrderCard from "@/components/OrderCard";
import { orderHistory, recommendations } from "@/constants";
import { Colors } from "@/constants/Colors";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Orders() {
  // TODO
  // need to create a settings page and add this to it
  return (
    <SafeAreaView style={{}}>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Roboto-Medium",
          fontSize: 24,
          color: Colors["dark-orange"],
          textTransform: "capitalize",
          marginVertical: 10,
        }}
      >
        Previous orders
      </Text>
      <View
        style={{
          marginTop: 10,
          // backgroundColor: "yellow",
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <FlatList
          data={orderHistory}
          renderItem={({ item }) => (
            <OrderCard id={0} status={item.status} price={item.price} />
          )}
          keyExtractor={(item: OrderCardProps) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
            gap: 10,
          }}
          ListEmptyComponent={() => (
            <View
              style={
                {
                  // backgroundColor: "black",
                }
              }
            >
              {/* TODO 
              The emptyListcomponent is not in the middle of this page. Needs to be fixed */}
              <EmptyListAnimation
                title="You don't have any favourites yet!"
                animationName="noOrders"
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

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
