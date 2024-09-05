import React, { memo, useMemo } from "react";
import { Text as BaseText, TextProps, StyleProp, TextStyle } from "react-native";
import { hp } from "@/constants/ResponsiveDesign";

interface CustomTextProps extends TextProps {
  text: string;
  fontSize?: number;
  lineHeight?: number;
  onPress?: () => void;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  color?: string;
  fontWeight?: TextStyle["fontWeight"];
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
}

export const CustomText: React.FC<CustomTextProps> = memo(
  ({
    text,
    fontSize = hp(15),
    lineHeight,
    onPress,
    textAlign,
    color = "#000",
    fontWeight = "400",
    style,
    ...rest
  }) => {
    const propsStyle = useMemo(
      () => ({
        color,
        fontSize,
        textAlign,
        lineHeight,
        fontWeight,
      }),
      [color, textAlign, fontWeight, lineHeight, fontSize]
    );

    return (
      <BaseText onPress={onPress} style={[propsStyle, style]} {...rest}>
        {text}
      </BaseText>
    );
  }
);
