import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Progress from "react-native-progress";
import StackHeader from "@/components/StackHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import { primary } from "@/constants/Colors";
import FilledButton from "@/components/buttons/Filled_button";
import { Spinner } from "@/constants/Spinner";
import { wp } from "@/constants/ResponsiveDesign";
import { OtpInput } from "react-native-otp-entry";
import TextButton from "@/components/buttons/Text_button";

const Otp = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async () => {
    if (phone === "" || password === "") {
      setPhone("");
      Toast.show({
        text: "All fields are required",
        position: "top",
        type: "danger",
        duration: 3000,
        textStyle: {
          textAlign: "center",
        },
        style: {
          width: wp(250),
          alignSelf: "center",
          justifyContent: "center",
          borderColorRadius: 10,
          borderRadius: 5,
        },
      });
    } else {
      await otpvalidate();
    }
  };

  const renderButton = () => {
    if (loadingState) {
      return <Spinner size="large" />;
    } else {
      return (
        <FilledButton
          title="Verifiy Email"
          onPress={onSubmit}
          //   style={styles.createButton}
          gradient
          color={"white"}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? "white" : "primary"}
      />
      <StackHeader title="" onPress={() => router.back()} />

      {/* <KeyboardAwareScrollView> */}
      <View style={styles.container}>
        <Progress.Bar
          progress={0.8}
          width={200}
          borderRadius={20}
          height={10}
          color={primary}
          animated={true}
          borderColor={"#fff"}
          unfilledColor={"#b1c5b1"}
        />
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
          {/* <KeyboardAwareScrollView> */}
          <OtpInput
            numberOfDigits={5}
            focusColor={primary}
            focusStickBlinkingDuration={500}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => console.log(`OTP is ${text}`)}
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
          {/* Resend OTP Code */}
          {/* </KeyboardAwareScrollView> */}

          <Text style={styles.error}>
            {/* Add your validation message here if any */}
          </Text>
          {/* {renderButton()} */}
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
    paddingTop: 20,
  },
  nameSection: {
    borderColor: "primary",
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
});
