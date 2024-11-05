import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Categories from "@/components/Categories";
import FarmItem from "@/components/FarmItem";
import TopProduce from "@/components/TopProduce";
import { router } from "expo-router";

const farmersData = [
  {
    image: require("../../assets/images/banana.png"),
    farmerName: "Banana",
    rating: 4.8,
  },
  {
    image: require("../../assets/images/corn.png"),
    farmerName: "Corn",
    rating: 4.6,
  },
  {
    image: require("../../assets/images/pearFruit.png"),
    farmerName: "Pear",
    rating: 4.8,
  },
  {
    image: require("../../assets/images/ginger.png"),
    farmerName: "Ginger",
    rating: 4.6,
  },
  {
    image: require("../../assets/images/shombo.png"),
    farmerName: "Shombo",
    rating: 4.6,
  },
  {
    image: require("../../assets/images/onion.png"),
    farmerName: "Onion",
    rating: 4.6,
  },
  {
    image: require("../../assets/images/broccoli.png"),
    farmerName: "Broccoli",
    rating: 4.6,
  },
  {
    image: require("../../assets/images/waterMelon.png"),
    farmerName: "Water Melon",
    rating: 4.6,
  },
];

const farmProducts = [
  { icon: "🥦", title: "Veggies" },
  { icon: "🥛", title: "Dairy product" },
  { icon: "🥜", title: "Nuts" },
  { icon: "🌾", title: "Caryopses" },
  { icon: "🌱", title: "Legumes" },
  { icon: "🍑", title: "Drupes" },
  { icon: "🍏", title: "Pomes" },
  { icon: "🍓", title: "Berries" },
  { icon: "🍋", title: "Hesperidia" },
  { icon: "🌻", title: "Achenes" },
];

const farmProducts2 = [
  {
    image: require("../../assets/images/corn2.png"),
    title: "Maize",
    pricePerKg: 2800,
  },
  {
    image: require("../../assets/images/asparagus.png"),
    title: "asparagus",
    pricePerKg: 3500,
  },
  {
    image: require("../../assets/images/avocado.png"),
    title: "Avocado",
    pricePerKg: 2800,
  },
  {
    image: require("../../assets/images/broccoli.png"),
    title: "Broccoli",
    pricePerKg: 2800,
  },
  {
    image: require("../../assets/images/eggplants.png"),
    title: "Eggplants",
    pricePerKg: 2800,
  },
  {
    image: require("../../assets/images/corn.png"),
    title: "Corn",
    pricePerKg: 2800,
  },
  {
    image: require("../../assets/images/tomato.png"),
    title: "Tomatoes",
    pricePerKg: 3500,
  },
];

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState<any>(null);
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 8,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar barStyle={"dark-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", marginStart: 10 }}>
              <Text
                style={{ color: "#06572F", fontSize: 22, fontWeight: "700" }}
              >
                Welcome, Joshua
              </Text>

              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <EvilIcons name="location" size={24} color="black" />
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>Lagos</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
            <View style={{ paddingHorizontal: 10 }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  borderColor: "grey",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../assets/images/bell.png")} />
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 5, margin: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Shop By Categories
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={farmProducts}
            renderItem={({ item, index }) => (
              <Categories
                icon={item.icon}
                title={item.title}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>

        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Recently Listed
          </Text>
          <View>
            <Text style={{ fontSize: 14, color: "green", fontWeight: "700" }}>
              View All
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={farmProducts2}
            renderItem={({ item }) => (
              <FarmItem
                url={item.image}
                title={item.title}
                weight={item.pricePerKg}
                onPress={undefined}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>

        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Produce </Text>
          <View>
            <Text style={{ fontSize: 14, color: "green", fontWeight: "700" }}>
              View All
            </Text>
          </View>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={farmersData}
            renderItem={({ item }) => (
              <TopProduce
                image={item.image}
                name={item.farmerName}
                rating={item.rating}
              />
            )}
            keyExtractor={(item) => item.farmerName}
          />
        </View>

        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Announcement{" "}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: "#EEF7EE",
            borderRadius: 8,
            flexDirection: "row",
            padding: 10,
            // justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../assets/images/location.png")}
            style={{
              width: 80,
              height: 70,
            }}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#02391E",
                marginVertical: 5,
              }}
            >
              Drop off just got better!
            </Text>
            <Text>Get your orders using our swift delivery</Text>
          </View>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={farmProducts2}
            renderItem={({ item }) => (
              <FarmItem
                onPress={() => router.push("/ProductDetails")}
                url={item.image}
                title={item.title}
                weight={item.pricePerKg}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>

        <View
          style={{
            paddingTop: 10,
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Top Farmers </Text>
          <View>
            <Text style={{ fontSize: 14, color: "green", fontWeight: "700" }}>
              View All
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
