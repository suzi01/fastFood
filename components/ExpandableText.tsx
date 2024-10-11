import { View, Text, StyleSheet, TextStyle } from "react-native";
import React, { useState } from "react";

const ExpandableText = ({
  description,
  textStyling,
}: {
  description: string;
  textStyling?: TextStyle;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleReadButton = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <Text style={[styles.descriptionStyle, { ...textStyling }]}>
        {open ? description : description.slice(0, 120).trim() + "..."}
      </Text>
      <Text
        onPress={handleReadButton}
        style={{
          // marginLeft: 5,
          fontFamily: "Roboto-Medium",
          marginTop: 5,
          color: "#ff9632",
        }}
      >
        {open ? "Read less" : "Read More"}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  descriptionStyle: {
    fontSize: 16,
    fontFamily: "Roboto-Light",
    fontWeight: "700",
  },
});

export default ExpandableText;
