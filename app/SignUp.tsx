import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CheckBox } from "react-native-elements";
import FilledButton from "@/components/buttons/Filled_button";
import TextButton from "@/components/buttons/Text_button";
import { darkGray, primary, white } from "@/constants/Colors";
import { globalStyles } from "@/constants/globalStyles";
import { hp, wp } from "@/constants/ResponsiveDesign";
import StackHeader from "@/components/StackHeader";
import { Spinner } from "@/constants/Spinner";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import axios from "axios";
import OneSignal from "react-native-onesignal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Error from "@/components/Error";
import { COLORS } from "@/constants/Theme";

const { width, height } = Dimensions.get("window");

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passwordValue, setPasswordValue] = useState(false);

  const modalizeRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    return () => {
      onReload();
    };
  }, []);

  const onReload = () => {
    setPhone("");
    setPassword("");
  };

  const showPassword = () => {
    setPasswordValue(!passwordValue);
  };

  const renderButton = () => {
    return loadingState ? (
      <Spinner size="large" />
    ) : (
      <FilledButton
        title="Log in"
        onPress={() => {}}
        style={styles.createButton}
        gradient
        color={"white"}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Platform.OS === "ios" ? white : primary}
      />
      <StackHeader title="" onPress={() => router.back()} />
      <View style={styles.container}>
        <View>
          <Text style={styles.regTitle}>Create an account</Text>
          {/* <Text style={styles.regBody}>Sign up</Text> */}
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={styles.errorTextStyle}>
            {error && "An error occurred"}
          </Text>
        </View>
        <KeyboardAwareScrollView>
          <Error error={error} />
          <>
            <View style={styles.nameSection}>
              <Text style={styles.inputText}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="gray"
                keyboardType="default"
                underlineColorAndroid="transparent"
                onChangeText={(firstname) => setPhone(firstname)}
              />
            </View>
            <Text style={styles.error}>{/* Validation error here */}</Text>
          </>
          <>
            <View style={styles.nameSection}>
              <Text style={styles.inputText}>Last Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="gray"
                keyboardType="default"
                underlineColorAndroid="transparent"
                onChangeText={(lastname) => setPhone(lastname)}
              />
            </View>
            <Text style={styles.error}>{/* Validation error here */}</Text>
          </>

          <>
            <View style={[styles.nameSection]}>
              <Text style={styles.inputText}>Email Address</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Email Address"
                placeholderTextColor="gray"
                underlineColorAndroid="transparent"
                onChangeText={(email) => setPhone(email)}
              />
            </View>
            <Text style={styles.error}>{/* Validation error here */}</Text>
          </>


          <>
          <View style={styles.nameSection}>
              <Text style={styles.inputText}>Password</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  style={styles.logInput}
                  placeholder="Confirm Password"
                  placeholderTextColor="gray"
                  secureTextEntry={!passwordValue}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => setPassword(text.trim())}
                  value={password}
                />
                <TouchableOpacity onPress={showPassword}>
                  <Image
                    style={{ height: 20, width: 20, tintColor: "#A7A6A6" }}
                    source={
                      passwordValue
                        ? require("../assets/images/eye_fill.png")
                        : require("../assets/images/eye_off_fill.png")
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>

          <>
          <View style={styles.nameSection}>
              <Text style={styles.inputText}>Confirm Password</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  style={styles.logInput}
                  placeholder="Confirm Password"
                  placeholderTextColor="gray"
                  secureTextEntry={!passwordValue}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => setPassword(text.trim())}
                  value={password}
                />
                <TouchableOpacity onPress={showPassword}>
                  <Image
                    style={{ height: 20, width: 20, tintColor: "#A7A6A6" }}
                    source={
                      passwordValue
                        ? require("../assets/images/eye_fill.png")
                        : require("../assets/images/eye_off_fill.png")
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>


          <View style={styles.buttons}>
            <FilledButton
              title="Continue"
              onPress={() => {
                console.log("pressed");
                // Add signup logic here
              }}
              backgroundColor={primary}
              color={white}
              style={[
                styles.createButton,
                {
                  backgroundColor: toggleCheckBox ? primary : "#cccccc",
                },
              ]}
              disable={!toggleCheckBox}
              gradient
            />
            <TextButton
              title="Existing account?"
              title2="Login"
              title2Color={primary}
              onPress={() => router.push({ pathname: "/Login" } as any)}
              titleStyle={styles.textButton}
            />
          </View>
          <Loading loading={loadingState} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
  },
  nameSection: {
    borderColor: primary,
    borderWidth: 0.5,
    borderRadius: 12,
    minHeight: hp(50),
    paddingHorizontal: hp(15),
    marginBottom: hp(15),
  },
  regTitle: {
    color: primary,
    fontSize: 18,
    textAlign: "left",
  },
  regBody: {
    fontSize: 14,
    paddingTop: 10,
    color: darkGray,
    textAlign: "left",
  },
  errorTextStyle: {
    color: "red",
  },
  textButton: {
    fontSize: 14,
  },
  input: {
    minHeight: hp(40),
    fontSize: hp(15),
    width: "80%",
  },
  error: {
    color: "#ff5252",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputText: {
    fontSize: 12,
    color: COLORS.primary,
    paddingTop: 5,
  },
  logInput: {
    minHeight: hp(40),
    fontSize: hp(15),
    width: "80%",
  },
});

export default Signup;