import {
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { t } from "react-native-tailwindcss";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

export default function ISSLocation() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getISSLocation();
  }, []);

  const getISSLocation = async () => {
    await axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((data) => {
        setLocation(data.data);
        // console.log(data.data);
      })
      .catch((err) => Alert.alert("Something went wrong! " + err.message));
  };

  return (
    <View style={[t.flex1, t.bgWhite]}>
      <ImageBackground
        style={[t.flex1]}
        source={require("../assets/iss_bg.jpg")}
      >
        <View
          style={[
            t.p5,
            t.justifyCenter,
            t.itemsCenter,
            t.bg001d3d,
            { marginTop: StatusBar.currentHeight },
          ]}
        >
          <Text style={[t.text2xl, t.textGray200]}>ISSLocation</Text>
        </View>
        {Object.keys(location).length === 0 ? (
          <View style={[t.flex1, t.pT40, t.itemsCenter]}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/preloader.gif")}
            />
          </View>
        ) : (
          <>
            <MapView
              style={{ width: "100%", height: "70%" }}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 100,
                longitudeDelta: 100,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location?.latitude,
                  longitude: location?.longitude,
                }}
              >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../assets/iss_icon.png")}
                />
              </Marker>
            </MapView>
            <View>
              <View style={[t.flexRow]}>
                <Text style={[t.textXl, t.textGray400]}>Latitude: </Text>
                <Text style={[t.textXl, t.textWhite]}>
                  {location?.latitude}
                </Text>
              </View>
              <View style={[t.flexRow]}>
                <Text style={[t.textXl, t.textGray400]}>Latitude: </Text>
                <Text style={[t.textXl, t.textWhite]}>
                  {location?.longitude}
                </Text>
              </View>
              <View style={[t.flexRow]}>
                <Text style={[t.textXl, t.textGray400]}>Latitude: </Text>
                <Text style={[t.textXl, t.textWhite]}>
                  {location?.altitude} km
                </Text>
              </View>
              <View style={[t.flexRow]}>
                <Text style={[t.textXl, t.textGray400]}>Latitude: </Text>
                <Text style={[t.textXl, t.textWhite]}>
                  {location?.velocity} km/h
                </Text>
              </View>
            </View>
          </>
        )}
      </ImageBackground>
    </View>
  );
}
