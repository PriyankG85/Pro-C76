import { View, Text } from "react-native";
import React from "react";
import { t } from "react-native-tailwindcss";

const Meteors = () => {
  return (
    <View style={[t.flex1, t.bgTeal200, t.justifyCenter, t.itemsCenter]}>
      <Text style={[t.tex2xl, t.textBlue800]}>Meteors</Text>
    </View>
  );
};

export default Meteors;
