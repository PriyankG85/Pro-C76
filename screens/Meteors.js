import {
  View,
  Text,
  Alert,
  Image,
  StatusBar,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { t } from "react-native-tailwindcss";
import axios from "axios";

const Meteors = () => {
  const [meteorsInfo, setMeteorsInfo] = useState(null);

  const today = new Date();
  const todayDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  useEffect(() => getMeteorsInfo(), []);

  const getMeteorsInfo = async () => {
    await axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-02-25&end_date=2022-03-02&api_key=RIdgO0mIqXEfYv1POSQ2UjuqNIhrUB9GBLuwTgDo"
      )
      .then((res) => {
        setMeteorsInfo(res.data.near_earth_objects);
      })
      .catch((err) => Alert.alert(err.message));
  };

  const renderItem = ({ item }) => {
    let meteor = item;
    let bg_img, speed, size;
    if (meteor.threat_score <= 30) {
      bg_img = require("../assets/meteor_bg1.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 100;
    } else if (meteor.threat_score <= 75) {
      bg_img = require("../assets/meteor_bg2.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 150;
    } else {
      bg_img = require("../assets/meteor_bg3.png");
      speed = require("../assets/meteor_speed3.gif");
      size = 200;
    }

    return (
      <View style={[t.flex1]}>
        <ImageBackground
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          source={bg_img}
        >
          <View style={[t.flex1, t.justifyEnd]}>
            <Image
              source={speed}
              style={{
                width: size,
                height: size,
                position: "absolute",
                top: 70,
                left: "50%",
                transform: [{ translateX: -(size / 2) }],
              }}
            />
            <View
              style={[
                t.pX5,
                t.pT6,
                { backgroundColor: "rgba(0, 29, 61, 0.7)", flex: 0.4 },
              ]}
            >
              <Text style={[t.textXl, t.textWhite]}>{item.name}</Text>
              <Text style={[t.textXl, t.textWhite]}>
                Closest to Earth -{" "}
                {item.close_approach_data[0].close_approach_date_full}
              </Text>
              <Text style={[t.textXl, t.textWhite]}>
                Minimum Diameter -{" "}
                {item.estimated_diameter.kilometers.estimated_diameter_min} km
              </Text>
              <Text style={[t.textXl, t.textWhite]}>
                Maximum Diameter -{" "}
                {item.estimated_diameter.kilometers.estimated_diameter_max} km
              </Text>
              <Text style={[t.textXl, t.textWhite]}>
                Velocity -{" "}
                {
                  item.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }{" "}
                km/h
              </Text>
              <Text style={[t.textXl, t.textWhite]}>
                Distance from the Earth -{" "}
                {item.close_approach_data[0].miss_distance.kilometers} km
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  if (!meteorsInfo) {
    return (
      <View style={[t.flex1, t.bg4a4e69, t.justifyCenter, t.itemsCenter]}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require("../assets/preloader.gif")}
        />
      </View>
    );
  } else {
    // *************** Algorithm Code ************** //

    const meteorsDates = Object.keys(meteorsInfo).map(
      (data) => meteorsInfo[data]
    );

    let meteors = [].concat.apply([], meteorsDates);

    meteors.forEach((e) => {
      let diameter =
        (e.estimated_diameter.kilometers.estimated_diameter_min +
          e.estimated_diameter.kilometers.estimated_diameter_max) /
        2;

      let threatScrore =
        (diameter / e.close_approach_data[0].miss_distance.kilometers) *
        1000000000;

      e.threat_scrore = threatScrore;
    });

    meteors.sort((a, b) => b.threat_scrore - a.threat_scrore);
    meteors = meteors.slice(0, 5);

    return (
      <ImageBackground
        source={require("../assets/meteor_bg.jpg")}
        style={[t.flex1, t.bg4a4e69]}
      >
        <View
          style={[
            t.p5,
            t.wFull,
            t.justifyCenter,
            t.itemsCenter,
            t.bg001d3d,
            { marginTop: StatusBar.currentHeight },
          ]}
        >
          <Text style={[t.text2xl, t.textGray200]}>Meteors</Text>
        </View>

        <FlatList
          data={meteors}
          keyExtractor={(item, i) => i}
          renderItem={renderItem}
          horizontal
        />

        {/* {meteors.map(
          (data, i) =>
            i <= 5 && (
              <Text key={i} style={[t.textWhite, t.textLg, t.selfCenter]}>
                {data.threat_scrore}
              </Text>
            )
        )} */}
      </ImageBackground>
    );
  }
};

export default Meteors;
