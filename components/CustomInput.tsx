import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = ({
  multiline,
  label,
  icon,
  iconName,
  iconSize,
  iconColor,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}: CustomInputProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <Text style={[styles.labelText, { ...labelStyle }]}>{label}</Text>
          <View style={[styles.inputTextContainer, { ...containerStyle }]}>
            {icon && iconName && (
              <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={[{ ...iconStyle }]}
              />
            )}
            <TextInput
              multiline={multiline}
              numberOfLines={10}
              maxLength={250}
              style={[styles.textInput, { ...inputStyle }]}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 8,
    marginBottom: 8,
    width: "100%",
  },
  labelText: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    marginBottom: 12,
  },
  inputTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  textInput: {
    borderRadius: 5,
    display: "flex",
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    flex: 1,
  },
});

export default CustomInput;
