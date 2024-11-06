import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import * as Progress from "react-native-progress";
import StackHeader from "@/components/StackHeader";
import { useRouter } from "expo-router";
import { primary } from "@/constants/Colors";
import Loading from "@/components/Loading";
import { wp } from "@/constants/ResponsiveDesign";
import { OtpInput } from "react-native-otp-entry";
import TextButton from "@/components/buttons/Text_button";
import { debounce } from "lodash";

const Otp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const routeToLogin = useCallback(
    debounce(() => {
      router.push("/Login");
    }, 5000),
    []
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.headerContainer}>
        <StackHeader title="" onPress={() => router.back()} />
        <Progress.Bar
          progress={0.7}
          width={150}
          borderRadius={20}
          height={10}
          color={primary}
          animated={true}
          borderColor={"#fff"}
          unfilledColor={"#b1c5b1"}
        />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.regTitle}>Email Verification</Text>
          <Text style={styles.regBody}>
            Enter the verification code sent to your email.
          </Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <OtpInput
            numberOfDigits={5}
            focusColor={primary}
            onFilled={(text) => {
              console.log(`OTP is ${text}`);
              routeToLogin(); // Trigger debounce to navigate
            }}
            theme={{
              containerStyle: styles.container,
              inputsContainerStyle: styles.inputsContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
          <View style={{ marginTop: 50 }}>
            <TextButton
              title=""
              title2="Resend OTP Code"
              title2Color={primary}
              onPress={() => {}}
              titleStyle={styles.textButton}
            />
          </View>
        </View>
      </View>
      <Loading loading={loading} />
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  nameSection: {
    borderColor: primary,
    borderWidth: 0.5,
    borderRadius: 12,
    minHeight: 50,
    paddingHorizontal: 15,
    paddingTop: 3,
    marginBottom: 10,
  },
  errorContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  regTitle: {
    color: primary,
    fontSize: 18,
    textAlign: "left",
  },
  regBody: {
    width: "85%",
    fontSize: 14,
    paddingTop: 10,
    color: "darkGray",
    textAlign: "left",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS !== "ios" ? 40 : 0,
  },
  errorTextStyle: {
    color: "red",
  },
  input: {
    minHeight: 40,
    fontSize: 15,
  },
  error: {
    color: "#ff5252",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputText: {
    color: "#005700",
  },
  textButton: {
    fontSize: 14,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  pinCodeContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  activePinCodeContainer: {
    borderColor: primary,
    borderWidth: 2,
  },
  pinCodeText: {
    fontSize: 18,
    color: "#000",
  },
  focusStick: {
    width: 2,
    height: 30,
    backgroundColor: primary,
  },
});
