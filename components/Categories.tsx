import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Categories = {
  icon: any;
  title: any;
};

const Categories = ({ icon, title }: Categories) => {
  return (
    <View
      style={{
        width: 150,
        height: 70,
        borderRadius: 50,
        backgroundColor: "green",
        marginHorizontal: 8,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View style={{ marginHorizontal: 8 }}>
        <Text> {icon}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
