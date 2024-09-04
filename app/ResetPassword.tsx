import React, { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import StackHeader from "@/components/StackHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import { primary } from "@/constants/Colors";
import FilledButton from "@/components/buttons/Filled_button";
import { Spinner } from "@/constants/Spinner";
import { hp } from "@/constants/ResponsiveDesign";

const ResetPassword = ({}) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordValue, setPasswordValue] = useState(false);

  const [loadingState, setLoadingState] = useState<boolean>(false);

  const router = useRouter();

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
      await recoverPassword();
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
          title="Recover Password"
          onPress={onSubmit}
          style={styles.createButton}
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
        <View>
          <Text style={styles.regTitle}>Forgot Password</Text>
          <Text style={styles.regBody}>
            Enter your Email to reset your password
          </Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
        <View>
          <KeyboardAwareScrollView>
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
                    onChangeText={(text) => setConfirmPassword(text.trim())}
                    value={confirmpassword}
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
          </KeyboardAwareScrollView>

          <Text style={styles.error}>
            {/* Add your validation message here if any */}
          </Text>
          {renderButton()}
        </View>
      </View>
      <Loading loading={loading} />
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
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
  logInput: {
    minHeight: hp(40),
    fontSize: hp(15),
    width: "80%",
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
});
