import { StyleSheet } from "react-native";
import { wp } from "@/constants/ResponsiveDesign";

export const globalStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(248, 250, 252, 1)",
  },
  container: {
    paddingHorizontal: wp(10),
    backgroundColor: "#fff",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowBetweenNoCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  undeline: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  alignText: {
    textAlign: "center",
  },
  buttonStyles: {
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: "100%",
    // marginVertical: 20,
  },
  smallButtonStyles: {
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: "40%",
    // marginVertical: 20,
  },
});

export const FontFamily = {
  textMdRegular: "Inter",
};
/* font sizes */
export const FontSize = {
  size_sm: 14,
  textMdRegular_size: 16,
  size_xs: 12,
  size_2xs: 11,
  size_3xl: 22,
};
/* Colors */
export const Color = {
  colorGray_100: "#171725",
  colorWhite: "#fff",
  colorSlategray: "#667085",
  colorDarkslategray_100: "#44444f",
  colorDimgray: "#696974",
  colorLightslategray: "#92929d",
  colorWhitesmoke: "#f1f1f5",
  colorMediumslateblue: "#0062ff",
  colorMediumseagreen_100: "#3dd598",
  colorMediumseagreen_200: "#3cd598",
  colorTomato: "#fc5a5a",
};
/* Gaps */
export const Gap = {
  gap_xs: 6,
  gap_sm: 8,
  gap_md: 10,
  gap_lg: 16,
};
/* Paddings */
export const Padding = {
  p_base: 16,
  p_5xs: 8,
  p_xs: 12,
};
/* border radiuses */
export const Border = {
  br_xl: 20,
  br_7xs: 6,
};
