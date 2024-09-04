import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { CustomText } from "./Text";
import Icons from "./Icons";

// Define types for props
interface StackHeaderProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  style?: boolean;
  notificationOnPress?: (event: GestureResponderEvent) => void;
}

const StackHeader: React.FC<StackHeaderProps> = ({ onPress, title, style, notificationOnPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: style === true ? 35 : 18,
        paddingBottom: 20,
        backgroundColor: "white",
        paddingHorizontal: 30,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "rgba(70, 79, 84, .1)",
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: 24,
          top: style === true ? 28 : undefined,
        }}
      >
        <Icons.AntDesign name="left" color={"rgba(70, 79, 84, 1)"} size={14} />
      </TouchableOpacity>
      <CustomText style={styles.text} text={title} />
    </View>
  );
};

interface StackHeaderDarkProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  chat?: any; // Adjust type if more information about `chat` is available
  notificationOnPress?: (event: GestureResponderEvent) => void;
}

export const StackHeaderDark: React.FC<StackHeaderDarkProps> = ({
  onPress,
  title,
  chat,
  notificationOnPress,
}) => {
  return (
    <View style={[styles.header, { backgroundColor: "#000" }]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.headerContainer,
          { backgroundColor: "rgba(70, 79, 84, 1)" },
        ]}
      >
        <Icons.AntDesign
          name="left"
          color={"rgba(255, 255, 255, 1)"}
          size={14}
        />
      </TouchableOpacity>
      <CustomText
        style={[styles.text, { color: "rgba(255, 255, 255, 1)" }]}
        text={title}
      />
    </View>
  );
};

interface ResourcesHeaderProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  navigation?: (event: GestureResponderEvent) => void;
}

export const ResourcesHeader: React.FC<ResourcesHeaderProps> = ({ onPress, title, navigation }) => {
  return (
    <View style={styles.resourcesHeader}>
      <TouchableOpacity onPress={onPress} style={styles.lowerCotainer}>
        <Icons.AntDesign name="left" color={"rgba(70, 79, 84, 1)"} size={14} />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity
        onPress={navigation}
        style={{
          backgroundColor: "rgba(70, 79, 84, .1)",
          width: 32,
          height: 32,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icons.FontAwesome name="bell" color={"rgba(70, 79, 84, 1)"} size={18} />
      </TouchableOpacity>
    </View>
  );
};

interface ResourcesHeaderForMissedProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  rightTitle: string;
  navigation?: (event: GestureResponderEvent) => void;
}

export const ResourcesHeaderForMissed: React.FC<ResourcesHeaderForMissedProps> = ({
  onPress,
  title,
  rightTitle,
  navigation,
}) => {
  return (
    <View style={styles.resourcesHeader}>
      <TouchableOpacity onPress={onPress} style={styles.lowerCotainer}>
        <Icons.AntDesign name="left" color={"rgba(70, 79, 84, 1)"} size={14} />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity
        onPress={navigation}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.textMissed}>{rightTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  resourcesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  lowerCotainer: {
    backgroundColor: "rgba(70, 79, 84, .1)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "rgba(70, 79, 84, .1)",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 24,
  },
  text: {
    fontSize: 16,
    color: "rgba(70, 79, 84, 1)",
  },
  textMissed: {
    fontSize: 14,
    color: "rgba(245, 0, 15, 1)",
  },
});
