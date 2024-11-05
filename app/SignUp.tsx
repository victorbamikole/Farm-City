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
  Alert,
} from "react-native";
import * as Progress from "react-native-progress";
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
import { Formik } from "formik";
import { registerFormValidation } from "@/helper/validate";
import { registerUser } from "@/helper/api";
import CustomButton from "@/components/buttons/CustomButton";
const { width, height } = Dimensions.get("window");

const Signup = () => {
  const [disabled, setIsDisabled] = useState(true);
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [error, setError] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passwordValue, setPasswordValue] = useState(false);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState(false);
  const [userName, setUserName] = React.useState("");

  const router = useRouter();

  const register = async (data: any) => {
    console.log("RESPONSEREGISTER1", data);
    setLoadingState(true);
    const status = await registerUser(data);
    console.log("RESPONSEREGISTER", status);
    if (status.code === "201") {
      setLoadingState(false);
      router.push("/Otp");
    } else {
        Alert.alert("Error", status.description);
      setLoadingState(false);
    }
    setLoadingState(false);
  };

  useEffect(() => {
    return () => {
      onReload();
    };
  }, []);

  const onReload = () => {
    setPhone("");
    setPassword("");
    setConfirmPassword("");
  };

  const showPassword = () => {
    setPasswordValue(!passwordValue);
  };
  const showConfirmPassword = () => {
    setConfirmPasswordValue(!confirmPasswordValue);
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
        backgroundColor={Platform.OS === "ios" ? "white" : "white"}
      />
      <View style={styles.headerContainer}>
        <StackHeader title="" onPress={() => router.back()} />
        <Progress.Bar
          progress={0.35}
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
          <Text style={styles.regTitle}>Create an account</Text>
          <Text style={styles.regBody}>Sign up</Text>
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              password: "",
              confirmPassword: "",
            }}
            validate={registerFormValidation}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values) => {
              values = await Object.assign(values);
              setEmailAddress(values.email);
              setPassword(values.password);
              setUserName(values.firstName);
              setConfirmPassword(values.confirmPassword);
              register(values);
              //  console.log("RESPONSEREGISTER2", registerUser(values));
              // onSignup();
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text style={styles.inputText}>
                  First Name{" "}
                  <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                </Text>
                <View style={styles.nameSection}>
                  <TextInput
                    style={styles.input}
                    value={values.firstName}
                    placeholder="First Name"
                    placeholderTextColor="gray"
                    onBlur={handleBlur("firstName")}
                    // keyboardType="default"
                    // underlineColorAndroid="transparent"
                    onChangeText={handleChange("firstName")}
                    // onChangeText={(firstname) => setPhone(firstname)}
                    selectionColor={"#02391E"}
                  />
                </View>

                {/* Email Address Input */}
                <Text style={styles.inputText}>
                  Email Address{" "}
                  <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                </Text>
                <View style={styles.nameSection}>
                  {/* <TextInput
                    style={styles.input}
                    keyboardType="default"
                    placeholder="Email Address"
                    placeholderTextColor="gray"
                    underlineColorAndroid="transparent"
                    value={values.email}
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    selectionColor={"#02391E"}
                  /> */}
                  <TextInput
                    style={styles.input}
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    // onBlur={handleBlur("email")}
                    // keyboardType="default"
                    // underlineColorAndroid="transparent"
                    onChangeText={handleChange("email")}
                    // onChangeText={(firstname) => setPhone(firstname)}
                    selectionColor={"#02391E"}
                  />
                </View>
                {/* <Text style={styles.error}>Validation error here</Text> */}

                {/* Password Input */}
                <Text style={styles.inputText}>
                  Password <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                </Text>
                <View style={styles.nameSection}>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.logInput}
                      placeholder="Password"
                      placeholderTextColor="gray"
                      secureTextEntry={!passwordValue}
                      underlineColorAndroid="transparent"
                      onChangeText={handleChange("password")}
                      // onChangeText={(text) => setPassword(text.trim())}
                      value={values.password}
                      onBlur={handleBlur("password")}
                      selectionColor={"#02391E"}
                    />
                    <TouchableOpacity onPress={showPassword}>
                      <Image
                        style={styles.eyeIcon}
                        source={
                          passwordValue
                            ? require("../assets/images/eye_fill.png")
                            : require("../assets/images/eye_off_fill.png")
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Confirm Password Input */}
                <Text style={styles.inputText}>
                  Confirm Password{" "}
                  <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                </Text>
                <View style={styles.nameSection}>
                  <View style={styles.passwordContainer}>
                    <TextInput
                      style={styles.logInput}
                      placeholder="Confirm Password"
                      placeholderTextColor="gray"
                      secureTextEntry={!confirmPasswordValue}
                      underlineColorAndroid="transparent"
                      value={values.confirmPassword}
                      onBlur={handleBlur("confirmPassword")}
                      onChangeText={handleChange("confirmPassword")}
                      selectionColor={"#02391E"}
                    />
                    <TouchableOpacity onPress={showConfirmPassword}>
                      <Image
                        style={styles.eyeIcon}
                        source={
                          confirmPasswordValue
                            ? require("../assets/images/eye_fill.png")
                            : require("../assets/images/eye_off_fill.png")
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Terms and Conditions Checkbox */}
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={toggleCheckBox}
                    onPress={() => {
                      setIsDisabled(!disabled);
                      setLoadingState(false);
                      setToggleCheckBox(!toggleCheckBox);
                    }}
                    containerStyle={styles.checkbox}
                    checkedColor={primary}
                  />
                  <Text style={styles.checkboxText}>
                    I agree to Farm City Terms & Conditions and Privacy Policy.
                  </Text>
                </View>

                {/* Continue Button */}
                <View style={{ marginTop: 20 }}>
                  {/* <FilledButton
                    title="Continue"
                    onPress={() => router.push("/Otp")}
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
                  /> */}
                  <View>
                    <CustomButton
                      isLoading={loadingState}
                      title={"Sign Up"}
                      onPress={() => handleSubmit()}
                      emailField={values.email}
                      toggle={toggleCheckBox}
                      disbaled={disabled}
                      password={values.password}
                      cmf_password={values.confirmPassword}
                      userName={values.firstName}
                    />
                  </View>
                </View>
                {/* <Loading loading={loadingState} /> */}
              </View>
            )}
          </Formik>
          <TextButton
            title="Existing account?"
            title2="Login"
            title2Color={primary}
            // onPress={() => handleSubmit()}
            onPress={() => router.push("/Login")}
            titleStyle={styles.textButton}
          />
          {/* <Error error={error} /> */}

          {/* First Name Input */}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS !== "ios" ? 40 : 0,
  },
  nameSection: {
    borderColor: primary,
    borderWidth: 0.5,
    borderRadius: 12,
    minHeight: hp(50),
    paddingHorizontal: hp(15),
    marginBottom: hp(15),
    marginTop: hp(10),
    justifyContent: "center",
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyeIcon: {
    height: 20,
    width: 20,
    tintColor: "#A7A6A6",
  },
  logInput: {
    minHeight: hp(40),
    fontSize: hp(15),
    width: "80%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
    padding: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
  },

  checkboxText: {
    fontSize: 12,
    color: primary,
    flexWrap: "wrap",
    flex: 1,
  },
  createButton: {
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
  },
});

export default Signup;
