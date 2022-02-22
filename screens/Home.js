import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { t } from "react-native-tailwindcss";

const Home = ({ navigation }) => {
  return (
    <View style={[t.flex1, t.bgTeal200, t.justifyCenter, t.itemsCenter]}>
      <ImageBackground
        style={[t.wFull, t.hFull]}
        source={require("../assets/bg.png")}
      >
        <SafeAreaView
          style={{
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          }}
        >
          <View style={[t.bg001d3dOpacity, t.p5]}>
            <Text style={[t.textBlue100, t.text2xl, t.textCenter]}>
              ISS Location - App
            </Text>
          </View>
          <View style={[t.mT20, t.p6]}>
            <TouchableOpacity
              onPress={() => navigation.push("ISSLocation")}
              style={[
                t.p3,
                t.border,
                t.roundedLg,
                t.bgGrayOpacity,
                t.borderBlack,
              ]}
            >
              <Image
                style={[
                  { marginTop: -40 },
                  t.mB3,
                  t.z10,
                  t.selfCenter,
                  t.w24,
                  t.h24,
                ]}
                // resizeMode={"contain"}
                source={require("../assets/iss_icon.png")}
              />
              <Text
                style={[
                  t.text6xl,
                  t.textGray800,
                  t.absolute,
                  { right: 40 },
                  t.opacity50,
                ]}
              >
                1
              </Text>
              <Text style={[t.fontBold, t.textGray800, t.text2xl]}>
                ISS Location
              </Text>
              <Text style={[t.textRed800, t.fontBold, t.textBase]}>
                Know more..
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.push("Meteors")}
              style={[
                t.p3,
                t.mT10,
                t.border,
                t.roundedLg,
                t.bgGrayOpacity,
                t.borderBlack,
              ]}
            >
              <Image
                style={[
                  { marginTop: -50 },
                  t.mB3,
                  t.z10,
                  t.selfCenter,
                  t.w24,
                  t.h24,
                ]}
                // resizeMode={"contain"}
                source={require("../assets/meteor_icon.png")}
              />
              <Text
                style={[
                  t.text6xl,
                  t.textGray800,
                  t.absolute,
                  { right: 40 },
                  t.opacity50,
                ]}
              >
                2
              </Text>
              <Text style={[t.fontBold, t.textGray800, t.text2xl]}>
                Meteors
              </Text>
              <Text style={[t.textRed800, t.fontBold, t.textBase]}>
                Know more..
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Home;
