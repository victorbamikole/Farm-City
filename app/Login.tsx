import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  ActivityIndicator,
  Alert,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { Toast } from "native-base";
import Error from "@/components/Error";
import Icon from "@/components/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/components/context/context";
import Modalize from "react-native-modalize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CheckBox } from "react-native-elements";
import FilledButton from "@/components/buttons/Filled_button";
import TextButton from "@/components/buttons/Text_button";
import { darkGray, primary, white } from "@/constants/Colors";
import { globalStyles } from "@/constants/globalStyles";
import { hp, wp } from "@/constants/ResponsiveDesign";
import StackHeader from "@/components/StackHeader";
import { Spinner } from "@/constants/Spinner";
import { useNavigation } from "@react-navigation/native";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { Formik } from "formik";
import { loginFormValidate, userNameValidate } from "@/helper/validate";
import { loginUser } from "@/helper/api";
import CustomButton from "@/components/buttons/CustomButton";

const { width, height } = Dimensions.get("window");

const Login: React.FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(true);
  const [passwordValue, setPasswordValue] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = React.useState("");
  const [disabled, setIsDisabled] = useState(false);

  const modalizeRef = useRef<Modalize>(null);
  const navigation = useNavigation(); // Hook to access navigation

  const login = async (data: any) => {
    console.log("RESPONSEREGISTER1", data);
    setLoadingState(true);
    const status = await loginUser(data);
    console.log("RESPONSEREGISTER", status);
    if (status.code === "200") {
      setLoadingState(false);
      router.push("/User");
    } else {
      Alert.alert("Error", status.description);
      setLoadingState(false);
    }
    setLoadingState(false);
  };

  useEffect(() => {
    // Fetch user data on mount
    _retrieveUserDataFromStorage();
    return () => {
      onReload();
    };
  }, []);

  const onReload = () => {
    setPhone("");
    setPassword("");
  };

  const onSubmit = () => {
    if (phone === "" || password === "") {
      setPhone("");
      setPassword("");
      Toast.show({
        text: "All fields are required",
        // position: "top",
        type: "danger",
        duration: 3000,
        textStyle: {
          textAlign: "center",
        },
        style: {
          width: wp(250),
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 5,
        },
      });
    } else if (
      phone !== "farmcity@interswitchgroup.com" &&
      password !== "technovation1"
    ) {
      router.push("/User"); // Routes to the UserScreen when hardcoded credentials match
    } else {
      Toast.show({
        text: "Invalid email or password",
        // position: "top",
        type: "danger",
        duration: 3000,
        textStyle: {
          textAlign: "center",
        },
        style: {
          width: wp(250),
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 5,
        },
      });
    }
  };

  const showPassword = () => {
    setPasswordValue(!passwordValue);
  };

  const renderButton = () => {
    if (loadingState) {
      return <Spinner size="large" />;
    } else {
      return (
        <FilledButton
          title="Log in"
          onPress={onSubmit}
          style={styles.createButton}
          gradient
          color={"white"}
        />
      );
    }
  };

  const _retrieveUserDataFromStorage = async () => {
    try {
      const data = await AsyncStorage.getItem("data");
      let session = JSON.parse(data || "{}");
      if (session !== null) {
        // Handle retrieved data
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Platform.OS === "ios" ? "white" : "#fff"}
        />
        {/* <StackHeader title="" onPress={() => router.back()} /> */}
        <View style={styles.container}>
          <View>
            <Text style={styles.regTitle}>Sign in to your account</Text>
            <Text style={styles.regBody}>Welcome back</Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={styles.errorTextStyle}>
              {error && "An error occurred"}
            </Text>
          </View>

          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={loginFormValidate}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={async (values) => {
                values = await Object.assign(values);
                setEmailAddress(values.email);
                setPassword(values.password);
                login(values);
                //  console.log("RESPONSEREGISTER2", registerUser(values));
                // onSignup();
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                  <Text style={styles.inputText}>
                    Email Address{" "}
                    <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                  </Text>
                  <View style={styles.nameSection}>
                    <TextInput
                      style={styles.input}
                      keyboardType="default"
                      placeholder="Email Address"
                      placeholderTextColor="gray"
                      underlineColorAndroid="transparent"
                      onBlur={handleBlur("email")}
                      onChangeText={handleChange("email")}
                      value={values.email}
                      selectionColor={"#02391E"}
                    />
                  </View>

                  <Text style={styles.inputText}>
                    Password{" "}
                    <Text style={{ color: "red", fontSize: 16 }}>*</Text>
                  </Text>
                  <View style={styles.nameSection}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextInput
                        style={styles.logInput}
                        placeholder="Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!passwordValue}
                        underlineColorAndroid="transparent"
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        value={values.password}
                        selectionColor={"#02391E"}
                      />
                      <TouchableOpacity onPress={showPassword}>
                        <Image
                          style={{
                            height: 20,
                            width: 20,
                            tintColor: "#A7A6A6",
                          }}
                          source={
                            passwordValue
                              ? require("../assets/images/eye_fill.png")
                              : require("../assets/images/eye_off_fill.png")
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  {/* {renderButton()} */}

                  <View style={{ marginTop: 20, width: "100%" }}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "80%" }}>
                        <CustomButton
                          isLoading={loadingState}
                          title={"Login"}
                          onPress={() => handleSubmit()}
                          emailField={values.email}
                          toggle={toggleCheckBox}
                          disbaled={disabled}
                          password={values.password}
                          cmf_password={values.password}
                          userName={values.email}
                        />
                      </View>
                      <TouchableOpacity style={{paddingStart: 10}}>
                        <Entypo name="fingerprint" size={50} color={primary} />
                      </TouchableOpacity>
                    </View>

                    <TextButton
                      title="Forgot Password?"
                      onPress={() =>
                        router.push({ pathname: "/ForgotPassword" } as any)
                      }
                      titleStyle={styles.forgotButton}
                    />

                    <TextButton
                      title="Don't have an account?"
                      title2="Sign Up"
                      title2Color={primary}
                      onPress={() =>
                        router.push({ pathname: "/SignUp" } as any)
                      }
                      titleStyle={styles.textButton}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAwareScrollView>

          {/* <Loading loading={loadingState} /> */}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
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
  input: {
    minHeight: hp(40),
    fontSize: hp(15),
    width: "80%",
  },
  errorTextStyle: {
    color: "red",
  },
  textButton: {
    fontSize: 14,
  },
  forgotButton: {
    fontSize: 14,
    color: primary,
  },
  logInput: {
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
    color: "#005700",
    paddingTop: 5,
  },
  modalHeeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(34, 45, 51, 1)",
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  createButton: {
    marginTop: 10,
  },
});

export default Login;
