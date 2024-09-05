import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Error = ({ error }) => {
  // const allErrorKeys = Object.keys(error)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};
export default Error;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    // paddingStart:3
  },
  text: {
    color: "red",
  },
});
