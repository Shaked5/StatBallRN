import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import PlayerTeam from "../PlayerTeam";
// import LoggedInNavigator, { TabNavigator } from "../../navigation/LoggedInNavigator";
import Home1 from '../../navigation/MainNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';





export const Home = () => {
  const [value, setValue] = useState('');
  const { getItem, setItem } = useAsyncStorage('user');


  const getData = async () => {
    const item = await getItem()
    console.log(item);
    setValue(item)
    console.log('after set value= ', value);
  }

  useEffect(() => {
    getData();
    console.log('in useEffect');
    

  }, [])

  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const GamesStack = createStackNavigator();

  return (
    <View style={{ flex: 1 }} >
      <PlayerTeam />
      <Text>Home!!!!</Text>
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