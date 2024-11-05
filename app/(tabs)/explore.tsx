import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const newsData = [
  {
    id: "1",
    title: "Latest in AgriTech: Precision Farming Innovations",
    image: "https://picsum.photos/200",
    summary:
      "Explore the advancements in precision farming technology improving crop yields and sustainability.",
  },
  {
    id: "2",
    title: "Smart Irrigation Systems Revolutionizing Agriculture",
    image: "https://picsum.photos/200",
    summary:
      "Learn how smart irrigation is helping farmers conserve water and optimize resources.",
  },
  {
    id: "3",
    title: "Drones in Agriculture: Enhancing Crop Monitoring",
    image: "https://picsum.photos/200",
    summary:
      "Discover how drones are transforming crop monitoring and pest control.",
  },
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(newsData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = newsData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.summary.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search agriculture topics..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#f8f8f8",
  },
  searchBar: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
    marginBottom: 16,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  summary: {
    fontSize: 14,
    color: "#666",
  },
});
