import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type FarmerProps  = {
  image: any,
  name: any,
  rating: any
}
const TopProduce = ({image, name, rating}: FarmerProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ height: 80, width: 80, borderRadius: 80, marginHorizontal: 9 }}
      >
        <Image
          style={{ height: 80, width: 80, borderRadius: 80 }}
          source={{ uri: image }}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontWeight: "500" }}>{name}</Text>
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AntDesign name="star" size={12} color="orange" />
        <Text style={{ fontWeight: "500" }}>{rating}</Text>
      </View>
    </View>
  );
};

export default TopProduce;

const styles = StyleSheet.create({});
