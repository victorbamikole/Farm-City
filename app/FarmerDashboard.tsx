import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "@/constants/globalStyles";
import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const LightElanisOverview = () => {
  return (
    <SafeAreaView style={styles.lightElanisOverview}>
      <ScrollView style={{ marginLeft: 30 }}>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <View style={styles.salesParent}>
              <View style={styles.sales}>
                <View style={[styles.shape, styles.shapeBg]} />
                <Text
                  style={[
                    styles.comparedTo21340Container,
                    styles.comparedPosition,
                  ]}
                >
                  <Text style={styles.comparedTo}>{`Compared to 
(`}</Text>
                  <Text style={styles.text}>₦</Text>
                  <Text style={styles.comparedTo}>21340 last year)</Text>
                </Text>
                <Text style={[styles.text1, styles.textTypo6]}>+2.5%</Text>
                <Text style={[styles.text2, styles.textTypo5]}>₦10289</Text>
                <Image
                  style={[styles.icDownIcon, styles.shapeIconLayout6]}
                  source={require("../assets/images/bell.png")}
                />
                <Text style={[styles.sales1, styles.apr1Position]}>Sales</Text>
              </View>
              <View style={styles.sales}>
                <View style={[styles.shape, styles.shapeBg]} />
                <Text
                  style={[
                    styles.comparedTo21340Container,
                    styles.comparedPosition,
                  ]}
                >
                  <Text style={styles.comparedTo}>{`Compared to 
(`}</Text>
                  <Text style={styles.text}>₦</Text>
                  <Text style={styles.comparedTo}>19000 last year)</Text>
                </Text>
                <Text style={[styles.text4, styles.textTypo6]}>+0.5%</Text>
                <Text style={[styles.text5, styles.textTypo5]}>₦20921</Text>
                <Image
                  style={[styles.icDownIcon1, styles.shapeIconLayout6]}
                  //
                  source={require("../assets/images/bell.png")}
                />
                <Text style={[styles.sales1, styles.apr1Position]}>
                  Purchase
                </Text>
              </View>
            </View>
            <View style={styles.salesParent}>
              <View style={styles.sales}>
                <View style={[styles.shape, styles.shapeBg]} />
                <Text style={[styles.comparedTo165, styles.comparedPosition]}>
                  Compared to (₦165 last year)
                </Text>
                <Text style={[styles.text6, styles.textTypo4]}>-1.5%</Text>
                <Text style={[styles.text2, styles.textTypo5]}>₦149</Text>
                <Image
                  style={[styles.icDownIcon2, styles.shapeIconLayout6]}
                  source={require("../assets/images/bell.png")}
                />
                <Text style={[styles.sales1, styles.apr1Position]}>Return</Text>
              </View>
              <View style={styles.sales}>
                <View style={[styles.shape, styles.shapeBg]} />
                <Text style={[styles.comparedTo165, styles.comparedPosition]}>
                  Compared to (₦10500 last year)
                </Text>
                <Text style={[styles.text8, styles.textTypo6]}>+2.5%</Text>
                <Text style={[styles.text2, styles.textTypo5]}>₦17390</Text>
                <Image
                  style={[styles.icDownIcon3, styles.shapeIconLayout6]}
                  source={require("../assets/images/bell.png")}
                />
                <Text style={[styles.marketing1, styles.apr1Position]}>
                  Marketing
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.overview, styles.groupLayout]}>
          <View style={[styles.group, styles.groupLayout]}>
            <View style={styles.show}>
              <Text style={[styles.showThisYearContainer, styles.textTypo3]}>
                <Text style={styles.show1}>Show:</Text>
                <Text style={styles.text21}>{` `}</Text>
                <Text style={styles.thisYear}>This Year</Text>
              </Text>
              <Image
                style={[styles.icDropdownIcon, styles.shapeIconLayout6]}
                source={require("../assets/images/bell.png")}
              />
            </View>
            <Text style={[styles.overview1, styles.text20Typo]}>Overview</Text>
          </View>
          <View style={styles.download}>
            <View style={[styles.month, styles.shapeIconLayout7]}>
              <View style={[styles.shape19, styles.shapeIconLayout7]} />
            </View>
            <Image
              style={[styles.componenticonicDownload, styles.shapeIconLayout6]}
              source={require("../assets/images/bell.png")}
            />
          </View>
        </View>
        <View style={[styles.menu01Parent, styles.inputFlexBox]}>
          <View style={styles.inputField}>
            <View style={styles.inputFieldBase}>
              <View style={styles.inputFieldBase}>
                <Text style={[styles.label, styles.labelLayout]}>Email</Text>
                <View style={[styles.input, styles.inputFlexBox]}>
                  <View style={[styles.content, styles.contentFlexBox]}>
                   
                    <Text style={[styles.text22, styles.textTypo]}>Search</Text>
                  </View>
                  <Image
                    style={styles.helpIcon}
                    source={require("../assets/images/bell.png")}
                  />
                </View>
              </View>
              <Text style={[styles.hintText, styles.textTypo]}>
                This is a hint text to help user.
              </Text>
            </View>
          </View>
          <Image
            style={styles.iconLayout}
            source={require("../assets/images/bell.png")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shapeBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  comparedPosition: {
    lineHeight: 16,
    width: "79.31%",
    marginTop: 12.5,
    textAlign: "left",
    color: Color.colorLightslategray,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
    left: "10.34%",
    top: "50%",
    position: "absolute",
  },
  textTypo6: {
    color: Color.colorMediumseagreen_100,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -46.5,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  textTypo5: {
    fontSize: FontSize.size_3xl,
    marginTop: -22.5,
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  shapeIconLayout6: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  apr1Position: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  textTypo4: {
    color: Color.colorTomato,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  shape4Layout: {
    height: 67,
    width: 300,
  },
  textTypo3: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.textMdRegular,
    letterSpacing: 0,
  },
  text10Position: {
    left: "31.06%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  text11Position: {
    left: "32.54%",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  shape5Layout: {
    height: 78,
    width: 300,
  },
  textTypo2: {
    marginTop: -19,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  visitorsPosition: {
    marginTop: 10,
    color: Color.colorDimgray,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  shapeIconLayout7: {
    height: "100%",
    top: "0%",
  },
  viewPosition: {
    height: "8.64%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  shapePosition2: {
    backgroundColor: Color.colorWhitesmoke,
    right: "0%",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "right",
    marginTop: -7,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textMdRegular,
    color: Color.colorLightslategray,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  may1Position: {
    marginTop: 73.5,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.textMdRegular,
    color: Color.colorLightslategray,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  shapeIconLayout5: {
    bottom: "17.44%",
    width: "25.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shapeIconLayout4: {
    bottom: "19.54%",
    width: "30.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shapeIconLayout3: {
    bottom: "22.08%",
    width: "28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  febPosition: {
    width: "10.81%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  shapeIconPosition2: {
    left: "58.33%",
    right: "12.5%",
    top: "0%",
  },
  shapeIconPosition1: {
    left: "12.5%",
    right: "58.33%",
  },
  shapeIconLayout: {
    bottom: "20.73%",
    width: "29.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  salesPosition1: {
    bottom: "75.41%",
    top: "16.72%",
    height: "7.87%",
    position: "absolute",
  },
  shapePosition1: {
    borderRadius: Border.br_7xs,
    bottom: "29.17%",
    top: "29.17%",
    height: "41.67%",
    left: "0%",
    position: "absolute",
  },
  salesPosition: {
    marginTop: -12,
    color: Color.colorDarkslategray_100,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  amazonPosition: {
    bottom: "16.9%",
    top: "74.83%",
    height: "8.28%",
    position: "absolute",
    overflow: "hidden",
  },
  shapePosition: {
    bottom: "25%",
    top: "25%",
    height: "50%",
    borderRadius: Border.br_7xs,
    left: "0%",
    position: "absolute",
  },
  ebayPosition: {
    bottom: "5.17%",
    top: "86.55%",
    height: "8.28%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "87%",
    right: "5%",
    width: "8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnIconPosition: {
    bottom: "86.55%",
    top: "5.17%",
    height: "8.28%",
  },
  shapeIconPosition: {
    right: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  text20Typo: {
    fontSize: 18,
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  labelTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
  },
  customerSpaceBlock: {
    gap: Gap.gap_lg,
    paddingHorizontal: Padding.p_base,
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupLayout: {
    height: 49,
    position: "absolute",
  },
  inputFlexBox: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelLayout: {
    lineHeight: 20,
    display: "none",
    fontSize: FontSize.size_sm,
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  textTypo: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
  },
  shape: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  comparedTo: {
    fontFamily: FontFamily.textMdRegular,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.textMdRegular,
  },
  comparedTo21340Container: {
    textAlign: "left",
    color: Color.colorLightslategray,
  },
  text1: {
    left: "37.59%",
  },
  text2: {
    color: Color.colorGray_100,
    left: "10.34%",
    fontSize: FontSize.size_3xl,
    marginTop: -22.5,
  },
  icDownIcon: {
    right: "29.66%",
    left: "62.07%",
    bottom: "75.61%",
    top: "14.63%",
    width: "8.28%",
    height: "9.76%",
    maxWidth: "100%",
  },
  sales1: {
    left: "11.03%",
    color: Color.colorGray_100,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -46.5,
    fontFamily: FontFamily.textMdRegular,
    letterSpacing: 0,
  },
  sales: {
    width: 145,
    height: 123,
    overflow: "hidden",
  },
  text4: {
    left: "54.83%",
  },
  text5: {
    left: "10.69%",
    color: Color.colorGray_100,
  },
  icDownIcon1: {
    right: "11.72%",
    left: "80%",
    bottom: "75.61%",
    top: "14.63%",
    width: "8.28%",
    height: "9.76%",
    maxWidth: "100%",
  },
  salesParent: {
    gap: Gap.gap_md,
    flexDirection: "row",
  },
  comparedTo165: {
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    color: Color.colorLightslategray,
  },
  text6: {
    left: "42.76%",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -46.5,
  },
  icDownIcon2: {
    right: "24.14%",
    left: "67.59%",
    bottom: "75.61%",
    top: "14.63%",
    width: "8.28%",
    height: "9.76%",
    maxWidth: "100%",
  },
  text8: {
    left: "58.28%",
  },
  icDownIcon3: {
    right: "8.97%",
    left: "82.76%",
    bottom: "75.61%",
    top: "14.63%",
    width: "8.28%",
    height: "9.76%",
    maxWidth: "100%",
  },
  marketing1: {
    left: "11.38%",
    color: Color.colorGray_100,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -46.5,
    fontFamily: FontFamily.textMdRegular,
    letterSpacing: 0,
  },
  frameGroup: {
    gap: 13,
    alignSelf: "stretch",
  },
  shape4: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  shapeIcon: {
    width: "27.27%",
    right: "72.73%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  icGoalIcon: {
    height: "44.44%",
    width: "12.12%",
    top: "27.78%",
    right: "80.3%",
    bottom: "27.78%",
    left: "7.58%",
  },
  text10: {
    marginTop: -18,
    left: "31.06%",
    textAlign: "left",
    top: "50%",
    position: "absolute",
    color: Color.colorGray_100,
    fontWeight: "600",
  },
  hitRateThis: {
    marginTop: 5,
    color: Color.colorDimgray,
    fontFamily: FontFamily.textMdRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_2xs,
    left: "31.06%",
  },
  hitRate1: {
    height: "53.73%",
    width: "44%",
    top: "23.88%",
    right: "51%",
    bottom: "22.39%",
    left: "5%",
    position: "absolute",
  },
  shapeCopy3: {
    height: "94.74%",
    width: "28.57%",
    top: "2.63%",
    right: "71.43%",
    bottom: "2.63%",
    left: "0%",
  },
  icGoalCopy2: {
    height: "42.11%",
    width: "12.7%",
    top: "28.95%",
    right: "79.37%",
    bottom: "28.95%",
    left: "7.94%",
  },
  text11: {
    marginTop: -19,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.colorGray_100,
  },
  dealsThisYear: {
    marginTop: 4,
    color: Color.colorDimgray,
    fontSize: FontSize.size_xs,
  },
  deals: {
    height: "56.72%",
    width: "42%",
    top: "22.39%",
    right: "3.33%",
    bottom: "20.9%",
    left: "54.67%",
    position: "absolute",
  },
  cardTeam: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  shape5: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  text12: {
    marginTop: -24,
    left: "-1.26%",
    fontSize: 20,
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
  },
  text13: {
    width: "27.73%",
    left: "62.18%",
    color: Color.colorTomato,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    letterSpacing: 0,
  },
  icDownIcon4: {
    height: "25%",
    width: "10.08%",
    top: "18.75%",
    bottom: "56.25%",
    left: "89.92%",
    right: "0%",
  },
  visitorsThisYear: {
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  visitor: {
    top: 15,
    width: 119,
    height: 48,
    left: 15,
    position: "absolute",
    overflow: "hidden",
  },
  graphIcon: {
    top: 26,
    left: 178,
    width: 97,
    height: 27,
    position: "absolute",
  },
  hitRateParent: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  shape6: {
    width: "89.73%",
    left: "10.27%",
    top: "92.86%",
    height: "7.14%",
    backgroundColor: Color.colorWhitesmoke,
    bottom: "0%",
  },
  k1: {
    left: "0%",
  },
  k: {
    width: "97.33%",
    bottom: "91.36%",
    left: "2.67%",
    top: "0%",
  },
  shape7: {
    width: "87.33%",
    left: "12.67%",
    top: "92.86%",
    height: "7.14%",
    backgroundColor: Color.colorWhitesmoke,
    bottom: "0%",
  },
  text14: {
    left: "-0.67%",
  },
  view: {
    top: "22.84%",
    bottom: "68.52%",
    left: "0%",
    width: "100%",
  },
  text15: {
    left: "-1%",
  },
  view1: {
    top: "45.68%",
    bottom: "45.68%",
    left: "0%",
    width: "100%",
  },
  view2: {
    top: "68.52%",
    bottom: "22.84%",
    left: "0%",
    width: "100%",
  },
  text17: {
    left: "-0.7%",
  },
  shape10: {
    width: "91.61%",
    left: "8.39%",
    top: "92.86%",
    height: "7.14%",
    backgroundColor: Color.colorWhitesmoke,
    bottom: "0%",
  },
  view3: {
    width: "95.33%",
    top: "91.36%",
    left: "4.67%",
    bottom: "0%",
  },
  value: {
    height: "53.11%",
    top: "30.82%",
    right: "-5%",
    bottom: "16.07%",
    left: "5%",
    position: "absolute",
    width: "100%",
  },
  may1: {
    left: "-3.7%",
    lineHeight: 24,
  },
  shapeIcon2: {
    right: "14.81%",
    left: "59.26%",
    height: "82.56%",
    top: "0%",
  },
  shapeIcon3: {
    height: "56.41%",
    top: "26.15%",
    right: "55.56%",
    left: "18.52%",
  },
  may: {
    width: "12.16%",
    right: "17.57%",
    left: "70.27%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  apr1: {
    marginTop: 63,
    left: "-4.35%",
    lineHeight: 24,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.colorLightslategray,
  },
  shapeIcon4: {
    height: "80.46%",
    right: "13.04%",
    left: "56.52%",
    top: "0%",
  },
  shapeIcon5: {
    height: "45.98%",
    top: "34.48%",
    right: "60.87%",
    left: "8.7%",
  },
  apr: {
    height: "89.23%",
    width: "10.36%",
    top: "10.77%",
    right: "36.49%",
    left: "53.15%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  mar1: {
    marginTop: 53,
    left: "-4%",
    lineHeight: 24,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.colorLightslategray,
  },
  shapeIcon6: {
    height: "77.92%",
    right: "16%",
    left: "56%",
    top: "0%",
  },
  shapeIcon7: {
    height: "58.44%",
    top: "19.48%",
    right: "60%",
    left: "12%",
  },
  mar: {
    height: "78.97%",
    width: "11.26%",
    top: "21.03%",
    right: "53.6%",
    left: "35.14%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  feb1: {
    marginTop: 68,
    lineHeight: 24,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.colorLightslategray,
    left: "0%",
  },
  shapeIcon8: {
    height: "81.52%",
    bottom: "18.48%",
    width: "29.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shapeIcon9: {
    height: "70.65%",
    top: "10.87%",
    bottom: "18.48%",
    width: "29.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  feb: {
    height: "94.36%",
    top: "5.64%",
    right: "71.62%",
    left: "17.57%",
  },
  jun1: {
    lineHeight: 24,
    left: "0%",
  },
  shapeIcon10: {
    width: "29.17%",
    bottom: "17.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    height: "82.56%",
  },
  shapeIcon11: {
    height: "41.03%",
    top: "41.54%",
    width: "29.17%",
    bottom: "17.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jun: {
    left: "89.19%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  jan1: {
    marginTop: 58,
    lineHeight: 24,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    color: Color.colorLightslategray,
    left: "0%",
  },
  shapeIcon12: {
    height: "79.27%",
    left: "58.33%",
    right: "12.5%",
    top: "0%",
  },
  shapeIcon13: {
    height: "48.78%",
    top: "30.49%",
    left: "12.5%",
    right: "58.33%",
  },
  jan: {
    height: "84.1%",
    top: "15.9%",
    right: "89.19%",
    left: "0%",
  },
  monthGraph: {
    height: "63.93%",
    width: "74%",
    top: "31.15%",
    right: "6.33%",
    bottom: "4.92%",
    left: "19.67%",
    position: "absolute",
  },
  month: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  shape11: {
    width: "8.6%",
    right: "91.4%",
    backgroundColor: Color.colorMediumseagreen_200,
  },
  offlineSales1: {
    left: "13.98%",
    color: Color.colorDarkslategray_100,
  },
  offlineSales: {
    width: "31%",
    right: "27%",
    left: "42%",
    overflow: "hidden",
  },
  shape12: {
    width: "8.79%",
    right: "91.21%",
    backgroundColor: Color.colorMediumslateblue,
  },
  onlineSales1: {
    left: "14.29%",
    color: Color.colorDarkslategray_100,
  },
  onlineSales: {
    width: "30.33%",
    right: "64.67%",
    left: "5%",
  },
  salesReport1: {
    marginTop: -137.5,
    fontSize: FontSize.textMdRegular_size,
    left: "5%",
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  text18: {
    marginTop: -132.5,
    left: "43.33%",
    color: Color.colorDimgray,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  salesReport: {
    height: 305,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  shape14: {
    width: "9.35%",
    right: "90.65%",
    backgroundColor: Color.colorMediumslateblue,
  },
  amazon1: {
    left: "18.69%",
    color: Color.colorDarkslategray_100,
  },
  k2: {
    left: "72.9%",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
  },
  amazon: {
    width: "35.67%",
    right: "56.33%",
    left: "8%",
  },
  shape15: {
    width: "11.24%",
    right: "88.76%",
    backgroundColor: "#ff974a",
  },
  alibaba1: {
    left: "22.47%",
    color: Color.colorDarkslategray_100,
  },
  k3: {
    left: "82.02%",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
  },
  alibaba: {
    width: "29.67%",
    right: "16.33%",
    left: "54%",
  },
  shape16: {
    width: "11.76%",
    right: "88.24%",
    backgroundColor: Color.colorMediumseagreen_200,
  },
  ebay1: {
    left: "23.53%",
    color: Color.colorDarkslategray_100,
  },
  k4: {
    left: "65.88%",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
  },
  ebay: {
    width: "28.33%",
    right: "63.67%",
    left: "8%",
  },
  shape17: {
    width: "9.09%",
    right: "90.91%",
    backgroundColor: "#ffc542",
  },
  shopify1: {
    left: "18.18%",
    color: Color.colorDarkslategray_100,
  },
  k5: {
    left: "66.36%",
    color: Color.colorDarkslategray_100,
    fontWeight: "700",
  },
  shopify: {
    width: "36.67%",
    right: "9.33%",
    left: "54%",
  },
  btnChevronRightIcon: {
    bottom: "86.55%",
    top: "5.17%",
    height: "8.28%",
  },
  btnChevronLeftIcon: {
    right: "87%",
    width: "8%",
    top: "5.17%",
    left: "5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text19: {
    marginTop: -129,
    left: "44.67%",
    fontSize: FontSize.textMdRegular_size,
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  shapeIcon14: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  shapeIcon15: {
    height: "61.88%",
    top: "38.13%",
    width: "50%",
    left: "0%",
  },
  shapeIcon16: {
    height: "6.25%",
    width: "24.3%",
    top: "93.75%",
    left: "25.7%",
  },
  shapeIcon17: {
    left: "50%",
    width: "50%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  text20: {
    marginTop: -19.2,
    left: "27.5%",
    letterSpacing: 0,
  },
  visitorsThisYear1: {
    left: "23.44%",
    fontSize: 9,
  },
  chart: {
    height: "44.14%",
    width: "42.67%",
    top: "22.07%",
    right: "28.67%",
    bottom: "33.79%",
    left: "28.67%",
    position: "absolute",
  },
  cardTeam1: {
    height: 290,
    left: 0,
    top: 0,
    width: 300,
    position: "absolute",
    overflow: "hidden",
  },
  marketplaceVisitor: {
    height: 290,
    alignSelf: "stretch",
  },
  viewMoreCustomers: {
    marginTop: 198,
    left: "23.67%",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  separator: {
    height: "0.21%",
    top: "87.34%",
    bottom: "12.45%",
    left: "0%",
    width: "100%",
  },
  ppIcon: {
    width: 36,
    height: 36,
  },
  isabellaMoran: {
    color: Color.colorGray_100,
    fontWeight: "600",
    textAlign: "left",
  },
  customerId00222: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    color: Color.colorLightslategray,
  },
  isabellaMoranParent: {
    gap: Gap.gap_xs,
  },
  ppParent: {
    gap: Gap.gap_md,
    flex: 1,
  },
  customer: {
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  customerParent: {
    top: 64,
    gap: Gap.gap_sm,
    left: 0,
    position: "absolute",
  },
  icMoreIcon: {
    height: "5.06%",
    top: "4.22%",
    bottom: "90.72%",
  },
  newCustomers1: {
    marginTop: -217,
    fontSize: FontSize.textMdRegular_size,
    left: "5%",
    color: Color.colorGray_100,
    fontWeight: "600",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  newCustomers: {
    height: 474,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameParent: {
    top: 149,
    left: 10,
    gap: 24,
    position: "absolute",
  },
  show1: {
    color: Color.colorLightslategray,
  },
  text21: {
    color: Color.colorDimgray,
  },
  thisYear: {
    color: Color.colorDarkslategray_100,
  },
  showThisYearContainer: {
    marginTop: -8,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    left: "0%",
  },
  icDropdownIcon: {
    width: "13.01%",
    left: "86.99%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  show: {
    height: "32.65%",
    top: "67.35%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  overview1: {
    marginTop: -24.5,
    left: "0%",
  },
  group: {
    width: 123,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  shape19: {
    borderRadius: 6,
    backgroundColor: "#054b28",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  componenticonicDownload: {
    height: "66.56%",
    width: "66.56%",
    top: "16.56%",
    right: "16.88%",
    bottom: "16.88%",
    left: "16.56%",
  },
  download: {
    top: 9,
    left: 258,
    width: 32,
    height: 32,
    position: "absolute",
  },
  overview: {
    top: 85,
    width: 290,
    left: 15,
  },
  menu01Icon: {
    overflow: "hidden",
  },
  label: {
    color: "#344154",
    display: "none",
    fontWeight: "500",
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
  },
  searchSmIcon: {
    overflow: "hidden",
  },
  text22: {
    fontSize: FontSize.textMdRegular_size,
    lineHeight: 24,
    flex: 1,
  },
  content: {
    gap: Gap.gap_sm,
    flex: 1,
  },
  helpIcon: {
    width: 16,
    height: 16,
    display: "none",
  },
  input: {
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#d0d5dd",
    borderWidth: 1,
    paddingHorizontal: 14,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  inputFieldBase: {
    gap: Gap.gap_xs,
    alignSelf: "stretch",
  },
  hintText: {
    display: "none",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    alignSelf: "stretch",
  },
  inputField: {
    overflow: "hidden",
    flex: 1,
  },
  menu01Parent: {
    left: 1,
    width: 320,
    gap: Gap.gap_lg,
    paddingHorizontal: Padding.p_base,
    top: 0,
    position: "absolute",
  },
  lightElanisOverview: {
    backgroundColor: "#fafafb",
    height: 2564,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default LightElanisOverview;
