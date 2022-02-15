import { View, Text } from "react-native";
import React from "react";
import { t } from "react-native-tailwindcss";

const ISSLocation = () => {
  return (
    <View style={[t.flex1, t.bgTeal200, t.justifyCenter, t.itemsCenter]}>
      <Text style={[t.text2xl, t.textBlue800]}>ISSLocation</Text>
    </View>
  );
};

export default ISSLocation;
