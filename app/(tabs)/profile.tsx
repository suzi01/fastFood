import { images } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Profile = () => {
  // TODO
  // need to create a settings page and add this to it
  return (
    <View>
      {/* TODO 
      the backgound image is slightly blurred, need to fix this */}
      <ImageBackground source={images.wave}>
        <View
          style={{
            // backgroundColor: "#ff9632",
            height: "100%",
          }}
        >
          {/* <View
        style={{
          // width: "100%",
          // height: 600,
          // backgroundColor: "pink",
          // borderBottomLeftRadius: 450,
          // borderBottomRightRadius: 450,
          // borderTopLeftRadius: "72%",
          // borderTopRightRadius: 0,
          // borderBottomRightRadius: "28%",
          // borderBottomLeftRadius: "100%",
          // borderRadius: "0% 100% 0% 100% / 72% 0% 100% 28%",
          // borderBottomLeftRadius: "50% 40%",
          // borderBottomRightRadius: "50% 40%",
          // border-bottom-right-radius: 50% 40%;
        }}
      > */}
          {/* <SafeAreaView style={{ height: "100%" }}> */}
          <View
            style={{
              marginTop: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text
                onPress={() => console.log("Edit")}
                style={{
                  fontSize: 20,
                  color: "white",
                  padding: 5,
                }}
              >
                Edit
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={images.profilePic}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 150,
                  padding: 10,

                  // borderWidth: 8,
                  // borderColor: Colors["live-orange"],
                }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 22,
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Julie Mango
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 15,
                }}
              >
                juliemango@hotmail.com
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Regular",
                  fontSize: 15,
                  marginTop: 25,
                }}
              >
                +77 777 77777
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Member since April 26th, 2022
              </Text>

              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 18,
                  textTransform: "capitalize",
                  marginTop: 30,
                }}
              >
                Linked Accounts
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  gap: 15,
                  paddingBottom: 10,
                }}
              >
                <TouchableOpacity>
                  <Ionicons name="logo-google" size={30} color="#ff9632" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="logo-facebook" size={30} color="#ff9632" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="logo-instagram" size={30} color="#ff9632" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View
        style={{
          bottom: 0,
          height: 700,
          backgroundColor: "white",
          borderTopLeftRadius: 350,
          borderTopRightRadius: 350,
        }}
      /> */}
          {/* </SafeAreaView> */}
          {/* </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;

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
