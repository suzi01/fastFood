import { View, Text } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "@/constants/Colors";

const AdditionalCheckboxes = ({
  id,
  extra,
  itemText,
  size,
  handleChecked,
  type,
}: AdditionalCheckboxesProps) => {
  return (
    <View
      key={id}
      style={{
        flexDirection: "row",
        paddingHorizontal: 5,
        marginVertical: 5,
        alignContent: "center",
        paddingVertical: 3,
        justifyContent: "space-between",
      }}
    >
      {type === "textTop" && (
        <Text
          style={{
            alignContent: "center",
            fontSize: 18,
          }}
        >
          {itemText}
        </Text>
      )}

      <BouncyCheckbox
        size={size}
        fillColor="#ffae3e"
        unFillColor="#FFFFFF"
        text={extra ? extra : undefined}
        iconStyle={{
          borderColor: Colors["light-orange"],
          borderRadius: type === "textBottom" ? 50 : 4,
        }}
        innerIconStyle={{
          borderWidth: 1.5,
          borderRadius: type === "textBottom" ? 50 : 4,
        }}
        textStyle={{
          fontFamily: "Roboto-Regular",
          textDecorationLine: "none",
          // textTransform: "capitalize",
        }}
        onPress={handleChecked}
        style={{ flex: type === "textBottom" ? 1 : 0 }}
      />
      {type === "textBottom" && <Text>£{itemText}</Text>}
    </View>
  );
};

export default AdditionalCheckboxes;
