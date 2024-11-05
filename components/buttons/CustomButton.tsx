import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from "react-native";
import React, { useState } from "react";
import { Colors, lightGray, primary } from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";

interface ReusableButtonProps extends TouchableOpacityProps {
  isLoading: boolean;
  title: string;
  emailField: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  toggle: boolean;
  disbaled: boolean;
  password: string;
  cmf_password: string;
  userName: string;
}

const CustomButton: React.FC<ReusableButtonProps> = ({
  isLoading,
  title,
  buttonStyle,
  titleStyle,
  emailField,
  toggle,
  disbaled,
  password,
  cmf_password,
  userName,

  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disbaled ? true : false}
      style={[
        defaultStyles.pillButton,
        isLoading ? styles.disabled : styles.enabled,
        emailField !== "" &&
        password !== "" &&
        cmf_password !== "" &&
        userName !== "" &&
        toggle !== false
          ? styles.enabled
          : styles.disabled,
        // toggle !== false ? styles.enabled : styles.disabled,
        { marginBottom: 20 },
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={[
            {
              color: "#fff",
              textAlign: "center",
              fontSize: 12,
              fontWeight: "bold",
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  enabled: {
    backgroundColor: primary,
  },
  disabled: {
    backgroundColor: lightGray,
  },
});
