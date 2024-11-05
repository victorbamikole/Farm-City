import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import { Assets } from '@/constants/Assets';
import AntDesign from "@expo/vector-icons/AntDesign";

const ProductDetails = () => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View style={{ marginHorizontal: 5, borderRadius: 20 }}>
        <Image
          source={{
            uri: "https://plantura.garden/uk/wp-content/uploads/sites/2/2021/03/roma-tomatoes.jpg",
          }}
          style={{ height: 300, width: "100%", borderRadius: 20 }}
        />
      </View>

      <View style={{ paddingTop: 20, marginHorizontal: 5 }}>
        <Text style={{ fontSize: 25, fontWeight: "700" }}>Fresh Tomatoes</Text>
        <Text style={{ fontSize: 25, fontWeight: "700" }}>(5KG)</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{ marginHorizontal: 5, paddingTop: 20, flexDirection: "row" }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            height={50}
            width={50}
            source={Assets.profileImage}
          />

          <View style={{ flexDirection: "column", paddingStart: 10}}>
            <Text>U.Hassan</Text>

            <View style={{ flexDirection: "row", alignItems: 'center' }}>
              <AntDesign name="star" size={12} color="orange" />
              <Text>4.9</Text>
            </View>
          </View>
        </View>

      <View>
        
      </View>
      </View>
    </SafeAreaView>
  );
}

export default ProductDetails

const styles = StyleSheet.create({})