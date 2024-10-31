import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StackHeader from "@/components/StackHeader";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import FilledButton from "@/components/buttons/Filled_button";
import { NativeBaseProvider, ScrollView } from "native-base";

const User = () => {
  const [selectedRole, setSelectedRole] = useState(null); // State for selected role
  const animation = useRef(null);

  const onAnimationFinish = () => {
    // Custom functionality, if needed
  };

  const handleContinue = () => {
    if (selectedRole === "farmer") {
      router.push("/FarmerDashboard");
    } else if (selectedRole === "buyer") {
    router.push({ pathname: "(tabs)" } as any);
    }
  };

  return (
    <NativeBaseProvider>

    <SafeAreaView style={styles.safeArea}>
      <StackHeader title="" onPress={() => router.back()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.message}>Let's get started on this journey</Text>
          <Text style={styles.body}>
            Tell us who you are, so we can tailor your farm city experience
          </Text>
        </View>

        <View style={styles.animationContainer}>
          {/* Farmer Option */}
          <TouchableOpacity
          activeOpacity={.8}
            style={[
              styles.userTypeContainer,
              selectedRole === "farmer" && styles.selectedBorder,
            ]}
            onPress={() => setSelectedRole("farmer")}
          >
            <LottieView
              ref={animation}
              style={styles.lottieView}
              source={require("../assets/images/farmer.json")}
              autoPlay
              loop
              onAnimationFinish={onAnimationFinish}
            />
            <Text style={styles.userTypeTitle}>I am a Farmer</Text>
            <Text style={styles.userTypeDescription}>
              For those who grow the goodness
            </Text>
          </TouchableOpacity>

          {/* Buyer Option */}
          <TouchableOpacity
          activeOpacity={.8}
            style={[
              styles.userTypeContainer,
              selectedRole === "buyer" && styles.selectedBorder,
            ]}
            onPress={() => setSelectedRole("buyer")}
          >
            <LottieView
              ref={animation}
              style={styles.lottieView}
              source={require("../assets/images/buyer.json")}
              autoPlay
              loop
              onAnimationFinish={onAnimationFinish}
            />
            <Text style={styles.userTypeTitle}>I am a Buyer</Text>
            <Text style={styles.userTypeDescription}>
              For those who savor the goodness
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <FilledButton title="Continue" onPress={handleContinue} />
        </View>
      </ScrollView>
    </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default User;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  animationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 20,
  },
  userTypeContainer: {
    alignItems: "center",
    width: "45%",
    backgroundColor: "#ededed",
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: "#D3D3D3",
    padding: 10,
  },
  selectedBorder: {
    borderColor: "#4CAF50",
  },
  lottieView: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  userTypeTitle: {
    fontSize: 18,
    color: "#212B36",
    fontFamily: "FigtreeBold",
    marginTop: 10,
    textAlign: "center",
  },
  userTypeDescription: {
    fontSize: 14,
    color: "#637381",
    fontFamily: "FigtreeRegular",
    textAlign: "center",
    marginTop: 5,
  },
  message: {
    fontSize: 22,
    color: "#212B36",
    fontFamily: "FigtreeBold",
    textAlign: "center",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: "#637381",
    fontFamily: "FigtreeRegular",
    textAlign: "center",
    marginHorizontal: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});
