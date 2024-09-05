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

const router = useRouter();

const { width, height } = Dimensions.get("window");

const Login: React.FC = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [passwordValue, setPasswordValue] = useState<boolean>(false);

  const modalizeRef = useRef<Modalize>(null);
  const navigation = useNavigation(); // Hook to access navigation

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

  const onSubmit = async () => {
    if (phone === "" || password === "") {
      setPhone("");
      setPassword("");
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
      await login();
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
          backgroundColor={Platform.OS === "ios" ? 'white' : '#fff'}
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
                onChangeText={(email) => setPhone(email)}
              />
            </View>

            <Text style={styles.inputText}>
              Password <Text style={{ color: "red", fontSize: 16 }}>*</Text>
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

            {renderButton()}
            <TouchableOpacity style={{ alignSelf: "center", marginTop: 20 }}>
              <Entypo name="fingerprint" size={50} color={primary} />
            </TouchableOpacity>
            <View style={{ marginTop: 60 }}>
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
                onPress={() => router.push({ pathname: "/SignUp" } as any)}
                titleStyle={styles.textButton}
              />
            </View>
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
