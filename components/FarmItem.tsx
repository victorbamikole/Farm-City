import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

type ItemProps = {
  url: any;
  title: any;
  weight: any;
  onPress: any;
};

const FarmItem = ({ url, title, weight, onPress }: ItemProps) => {
  return (
    <View style={{ width: 200, borderRadius: 20, margin: 10 }}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          style={{ width: 200, height: 150, borderRadius: 20 }}
          source={typeof url === "string" ? { uri: url } : url}
        />
      </TouchableOpacity>

      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>{title}</Text>
          </View>
          <View style={{ paddingTop: 3 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              N{weight}/kg
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#0a2c1c",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          borderBottomEndRadius: 10,
          borderTopStartRadius: 10,
          marginTop: 10,
        }}
        onPress={() => {
          // Handle item click
        }}
        activeOpacity={0.8}
      >
        <Image source={require("../assets/images/plusSign.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default FarmItem;

const styles = StyleSheet.create({});
