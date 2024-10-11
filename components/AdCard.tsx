import { images } from "@/constants";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export const AdCard = ({
  handleCardButtonPress,
  cardText,
  buttonText,
}: AdCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={images.foodBackground} resizeMode="repeat">
        <View style={styles.cardBackground}>
          <View style={styles.innerContainer}>
            <Text style={styles.cardHeadingText}>{cardText}</Text>
            <View style={{ marginTop: 50, width: "40%" }}>
              <TouchableOpacity
                onPress={handleCardButtonPress}
                style={styles.buttonContainer}
              >
                <Text style={styles.buttonText}>{buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={images.chickenBurger}
            alt="burger Image"
            style={styles.cardImage}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "#db9f44",
    margin: "auto",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  cardBackground: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  innerContainer: {
    paddingTop: 10,
    flexDirection: "column",
    width: "75%",
    marginLeft: 5,
  },
  cardHeadingText: {
    width: "100%",
    fontFamily: "Roboto-Medium",
    fontSize: 24,
    textTransform: "capitalize",
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginBottom: 10,
  },
  buttonText: { color: "white" },
  cardImage: {
    marginTop: 0,
    position: "absolute",
    top: 0,
    left: "50%",
  },
});

export default AdCard;
