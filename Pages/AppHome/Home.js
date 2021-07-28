import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import PlayerTeam from "../PlayerTeam";
import { createStackNavigator } from '@react-navigation/stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {StatBallContext} from '../../context';


export const Home = () => {
  const [value, setValue] = useState('');
  const { getItem, setItem } = useAsyncStorage('user');
  const {user} = React.useContext(StatBallContext);

  const getData = async () => {
    const item = await getItem()
    console.log('item=',item);
    //setValue(item)
  }

  useEffect(() => {
    getData();
    console.log('in useEffect');
    console.log('user=', user);
  }, [])

  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const GamesStack = createStackNavigator();
  console.log('after set value= ', value);
  return (
    <View style={{ flex: 1 }} >
      <PlayerTeam />
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