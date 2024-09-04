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
import StackHeader from "@/components/StackHeader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "@/components/Loading";
import { useRouter } from "expo-router";
import { primary } from "@/constants/Colors";
import FilledButton from "@/components/buttons/Filled_button";
import { Spinner } from "@/constants/Spinner";
import { wp } from "@/constants/ResponsiveDesign";

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
        <View>
          <Text style={styles.regTitle}>Email Verification</Text>
          <Text style={styles.regBody}>
          Enter the verification code sent to your email.
          </Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
        <View>
          <KeyboardAwareScrollView>
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

export default Otp;

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
