import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

type CategoriesProps = {
  icon: React.ReactNode;
  title: string; 
  index: number;
  activeIndex: number | null; 
  setActiveIndex: (index: number | null) => void; 
};

const Categories: React.FC<CategoriesProps> = ({ icon, title, index, activeIndex, setActiveIndex }) => {
  const handlePress = () => setActiveIndex(index === activeIndex ? null : index);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        { backgroundColor: activeIndex === index ? "#0a2c1c" : "#d5deda" },
      ]}
    >
      <Text style={[styles.iconText, { color: activeIndex === index ? "#d5deda" : "#06572F" }]}>{icon}</Text>
      <Text style={[styles.titleText, { color: activeIndex === index ? "#d5deda" : "#06572F" }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 8,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginHorizontal: 8,
  },
  iconText: { 
    fontSize: 16,
    color: "white",
  },
  titleText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
