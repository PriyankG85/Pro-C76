import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import ISSLocation from "./screens/ISSLocation";
import Meteors from "./screens/Meteors";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="rgba(36, 0, 70, 0.8)" />
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <StackNavigator.Screen name={"Home"} component={Home} />
        <StackNavigator.Screen name={"ISSLocation"} component={ISSLocation} />
        <StackNavigator.Screen name={"Meteors"} component={Meteors} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const StackNavigator = createStackNavigator();

