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
