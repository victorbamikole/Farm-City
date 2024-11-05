import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type FarmerProps = {
  image: any;
  name: string;
  rating: number;
};

const TopProduce = ({ image, name, rating }: FarmerProps) => {
  const isRemoteImage = typeof image === "string";

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ height: 80, width: 80, borderRadius: 80, marginHorizontal: 9 }}
      >
        <Image
          style={{ height: 80, width: 80, borderRadius: 80 }}
          source={isRemoteImage ? { uri: image } : image}
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
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/images/rating.png")}
        />
        <Text style={{ fontWeight: "500" }}>{rating}</Text>
      </View>
    </View>
  );
};

export default TopProduce;

const styles = StyleSheet.create({});
