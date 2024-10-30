import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Assets } from "@/constants/Assets";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const dashboard = () => {
  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              backgroundColor: "black",
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              height={50}
              width={50}
              source={Assets.profileImage}
            />
          </View>

          <View style={{ flexDirection: "column", marginStart: 20 }}>
            <Text>Robert Martinez</Text>

            <View style={{ flexDirection: "row", marginTop: 5 }}>
              <EvilIcons name="location" size={24} color="black" />
              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>Lagos</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={{flexDirection: 'row'}}>
            <View>
                
            </View>

        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default dashboard;

const styles = StyleSheet.create({});
