import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { FontSize } from "@/constants/globalStyles";

const Inbox = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("first");
  const [messages, setMessages] = useState([
    {
      id: "1",
      username: "John Doe",
      time: "2 hours ago",
      rating: 4,
      comment: "Thank you. The shirt was delivered on time and fits perfectly",
    },
    {
      id: "2",
      username: "teanottee",
      time: "2 hours ago",
      rating: 4,
      comment:
        "Thank you, the dress fits perfectly and I think you have great taste",
    },
    {
      id: "3",
      username: "Bob",
      time: "3 hours ago",
      rating: 5,
      comment:
        "Thank you. The shirt was delivered on time and fits perfectly. Thank you. The shirt was delivered on time and fits perfectly",
    },
    {
      id: "4",
      username: "Charlie",
      time: "1 hour ago",
      rating: 3,
      comment: "Very stylish!",
    },
    {
      id: "5",
      username: "Diana",
      time: "5 hours ago",
      rating: 2,
      comment: "Not what I expected.",
    },
    {
      id: "6",
      username: "Ethan",
      time: "10 minutes ago",
      rating: 5,
      comment: "Amazing fit!",
    },
    {
      id: "7",
      username: "Fiona",
      time: "30 minutes ago",
      rating: 4,
      comment: "Will buy again!",
    },
    {
      id: "8",
      username: "George",
      time: "15 minutes ago",
      rating: 3,
      comment: "Just okay.",
    },
    {
      id: "9",
      username: "teanottee",
      time: "2 hours ago",
      rating: 4,
      comment:
        "Thank you, the dress fits perfectly and I think you have great taste",
    },
    {
      id: "10",
      username: "Bob",
      time: "3 hours ago",
      rating: 5,
      comment: "Great quality!",
    },
    {
      id: "11",
      username: "Charlie",
      time: "1 hour ago",
      rating: 3,
      comment: "Very stylish!",
    },
    {
      id: "12",
      username: "Diana",
      time: "5 hours ago",
      rating: 2,
      comment: "Not what I expected.",
    },
    {
      id: "13",
      username: "Ethan",
      time: "10 minutes ago",
      rating: 5,
      comment: "Amazing fit!",
    },
  ]);
  const [notifications, setNotifications] = useState([]);

  const currentItems = selectedTab === "first" ? messages : notifications;

  const renderMessageItem = ({ item }) => {
    const { username, time, rating, comment } = item;
    const firstLetter = username.charAt(0).toUpperCase();

    return (
      <TouchableOpacity
        onPress={() => router.push('/')}
        style={{ flexDirection: "row", padding: 10 }}
      >
        <View style={styles.initialContainer}>
          <Text style={styles.initial}>{firstLetter}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View>
            <Text style={styles.comment}>{comment}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: Colors.light.background,
        },
      ]}
    >
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  emptyState: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  emptyText: {
    fontSize: 14,
    color: "#07090C",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "DMSansMedium",
  },
  emptyText2: {
    fontSize: 14,
    color: "#90959E",
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 80,
    fontFamily: "DMSansRegular",
  },
  initialContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  initial: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "DMSansBold",
  },
  contentContainer: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontSize:16,
    color: "#07090C",
    fontFamily: "DMSansMedium",
  },
  time: {
    fontSize: 12,
    color: "#6B727E",
    fontFamily: "DMSansRegular",
  },
  comment: {
    fontSize: 14,
    color: "#07090C",
    fontFamily: "DMSansRegular",
    marginTop: 5,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    paddingTop: 10,
  },
});
