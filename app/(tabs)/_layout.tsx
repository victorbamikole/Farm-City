import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Message1 from "../../assets/images/message1.svg";
import Message from "../../assets/images/message.svg";
import Chat from "../../assets/images/map.svg";
import Map1 from "../../assets/images/map1.svg";
import Map from "../../assets/images/map.svg";
import Cart from "../../assets/images/cart.svg";
import Cart1 from "../../assets/images/cart1.svg";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#06572F" : "#2e2929"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#06572F" : "#2e2929",
                fontFamily: "DMSansRegular",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="#005700" />
            ) : (
              <FontAwesome name="search" size={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#06572F" : "#2e2929",
                fontFamily: "DMSansRegular",
              }}
            >
              Explore
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Message1 width={24} height={24} />
            ) : (
              <Message width={24} height={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#06572F" : "#2e2929",
                fontFamily: "DMSansRegular",
              }}
            >
              Chat
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Map1 width={24} height={24} />
            ) : (
              <Map width={24} height={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#06572F" : "#2e2929",
                fontFamily: "DMSansRegular",
              }}
            >
              Map
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Cart1 width={24} height={24} />
            ) : (
              <Cart width={24} height={24} />
            ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#06572F" : "#2e2929",
                fontFamily: "DMSansRegular",
              }}
            >
              Cart
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
