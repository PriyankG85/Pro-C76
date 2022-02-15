import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { t } from "react-native-tailwindcss";

const Home = ({ navigation }) => {
  return (
    <View style={[t.flex1, t.bgTeal200, t.justifyCenter, t.itemsCenter]}>
      <Text style={[t.textBlue800, t.text2xl]}>Home Screen</Text>
      <View style={[t.mT20]}>
        <TouchableOpacity
          onPress={() => navigation.push("ISSLocation")}
          style={[t.p3, t.border, t.borderWhite, t.roundedLg, t.bgBlue500]}
        >
          <Text style={[t.fontBold, t.textWhite, t.textLg, t.textCenter]}>
            ISS Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push("Meteors")}
          style={[
            t.p3,
            t.mT5,
            t.border,
            t.borderWhite,
            t.roundedLg,
            t.bgBlue500,
          ]}
        >
          <Text style={[t.fontBold, t.textWhite, t.textLg, t.textCenter]}>
            Meteors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
