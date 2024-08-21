import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

export default function Loading({ loading }) {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"#005700"} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    position: "absolute",
    top: 0,
    left: 0,

    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderRadius: 8,
    elevation: 8,
  },
  text: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "500",
    color: "#005700",
  },
});
