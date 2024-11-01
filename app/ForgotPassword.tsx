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
import { hp, wp } from "@/constants/ResponsiveDesign";
import { Toast } from "native-base";

const ForgotPassword = ({}) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    if (phone === "") {
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
      await recoverPassword();
    }
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
        backgroundColor={Platform.OS === "ios" ? "white" : "white"}
      />
      <View style={styles.headerContainer}>
        <StackHeader title="" onPress={() => router.back()} />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.regTitle}>Forgot Password</Text>
          <Text style={styles.regBody}>
            Enter your Email you've registered with. We'll send you the
            instructions there.
          </Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
        <View>
          <KeyboardAwareScrollView>
            <Text style={styles.inputText}>
              Email Address{" "}
              <Text style={{ color: "red", fontSize: 16 }}>*</Text>
            </Text>
            <View
              style={[
                styles.nameSection,
                isFocused && { borderColor: primary },
              ]}
            >
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Email Address"
                placeholderTextColor="gray"
                underlineColorAndroid="transparent"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)} 
                onChangeText={(email) => setPhone(email)}
                selectionColor={'#02391E'}
              />
            </View>
          </KeyboardAwareScrollView>

          <Text style={styles.error}></Text>
          {renderButton()}
        </View>
      </View>
      <Loading loading={loading} />
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 12,
    minHeight: hp(50),
    paddingHorizontal: hp(15),
    marginBottom: hp(15),
    marginTop: hp(10),
    justifyContent: "center",
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
  createButton:{
    backgroundColor: primary,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS !== "ios" ? 40 : 0,
  },
  error: {
    color: "#ff5252",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputText: {
    color: "#005700",
    fontSize: 12,
  },
});
