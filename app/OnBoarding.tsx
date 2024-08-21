import React from "react";
import { Animated, Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'; // Import the hook

// constants
import { Assets } from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { COLORS, FONTS, SIZES } from "@/constants/Theme";
import FilledButton from "@/components/buttons/Filled_button";

const { onboarding1, onboarding2, onboarding3 } = Assets;

const onBoardings = [
  {
    title: "Quick Access to Farm Products",
    description: "Easily route access to Farmers location via map navigation.",
    img: onboarding1,
  },
  {
    title: "Quick Access to Farm Products",
    description: "Easily route access to Farmers location via map navigation.",
    img: onboarding2,
  },
  {
    title: "Quick Access to Farm Products",
    description: "Easily route access to Farmers location via map navigation.",
    img: onboarding3,
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = React.useState(false);
  const navigation = useNavigation(); // Use the hook

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    firstTimeLaunch("first_time_user");
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 2) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  const firstTimeLaunch = async (value) => {
    try {
      await AsyncStorage.setItem("first_time_user", value);
    } catch (e) {
      console.error(e);
    }
  };

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: SIZES.padding * 4,
                marginBottom: SIZES.padding,
              }}
            >
              <Image source={item.img} resizeMode="cover" />
            </View>
            <View
              style={{
                marginTop: SIZES.padding,
                paddingHorizontal: 40,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.gray,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
  
              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <View 
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginTop: SIZES.padding, // Add some margin to the top of the button
              }}
            >
              <FilledButton 
                onPress={() => navigation.navigate("Login")}
                title={completed ? "Get Started" : "Skip"}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                marginTop: SIZES.padding / 2, // Adjust spacing between button and login text
              }}
            >
              <Text
                style={{ textAlign: "center", ...FONTS.h3, color: COLORS.gray }}
              >
                {" Existing account?   "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    textAlign: "center",
                    ...FONTS.h3,
                    color: COLORS.primary,
                    fontWeight: "800",
                  }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF7EE",
  },
  imageAndTextContainer: {
    width: SIZES.width,
  },
  dotsRootContainer: {
    bottom: SIZES.height > 700 ? "10%" : "12%",
    position: "absolute",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.radius / 2,
  },
});

export default OnBoarding;
