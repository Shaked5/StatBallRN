import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


import PlayerTeam from "../PlayerTeam";
import LoggedInNavigator, { TabNavigator } from "../../navigation/LoggedInNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


export const Home = ({ route }) => {

  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const GamesStack = createStackNavigator();

  return (
    <View style={{ flex: 1 }} >
       <TabNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "60%",
    backgroundColor: "black",
  },
  icon: {
    position: "absolute",
    marginTop: "10%",

  }
});
export default Home;