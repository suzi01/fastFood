import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface SearchBarProps {
  data: string[];
  onFilterClick: () => void;
}

const SearchBar = ({ data, onFilterClick }: SearchBarProps) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [inputText, setInputText] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  // TODO
  // Will need to use a hook or a redux attribute so filteredData can be set with perhaps useEffect

  const handleInputChange = (text: string) => {
    setInputText(text);
    if (text) {
      const filtered = data.filter((item: string) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleItemPress = (item: string) => {
    setInputText(item);
    setFilteredData([]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.container,
            {
              // borderColor: onFocus === true ? "#eb8d00" : "#000",
              // borderWidth: onFocus === true ? 2 : 1,
            },
          ]}
        >
          <Ionicons name={"search"} size={25} color={Colors["light-orange"]} />
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={handleInputChange}
            // onFocus={() => setOnFocus(true)} // Disable scroll when focused
            // onBlur={() => {
            //   setOnFocus(false);
            //   console.log("not in focus");
            // }} // Re-enable scroll on blur
            placeholder="Search food, drink and more..."
          />
          <TouchableOpacity
            style={{
              borderLeftWidth: 1,
              paddingLeft: 5,
              borderLeftColor: "#eb8d00",
            }}
            onPress={onFilterClick}
          >
            <Ionicons
              name={"options"}
              size={25}
              color={Colors["light-orange"]}
            />
          </TouchableOpacity>

          {/* {filteredData.length > 0 && (
            <View style={styles.dropdownContainer}>
              <ScrollView>
                {filteredData.map((item, index) => (
                  <TouchableOpacity onPress={() => handleItemPress(item)}>
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )} */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  input: {
    borderRadius: 15,
    flex: 1,
    height: 40,
    borderColor: "gray",
    paddingHorizontal: 8,
  },
  dropdownContainer: {
    position: "absolute",
    top: 55,
    left: 16,
    right: 16,
    width: "auto",
    backgroundColor: "#fff",
    zIndex: 1,
    borderWidth: 1,
    borderColor: "gray",
    maxHeight: 200,
  },
  itemText: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    // borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SearchBar;
