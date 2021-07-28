import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import PlayerTeam from "../PlayerTeam";
<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {StatBallContext} from '../../context';
=======
import Home1 from '../../navigation/MainNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import HomeImage from "../../components/HomeImage";



>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1


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
<<<<<<< HEAD
    <View style={{ flex: 1 }} >
      <PlayerTeam />
=======
    <View style={styles.centeredView} >
      <PlayerTeam/>
      <HomeImage/>
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    
  },
  PlayerTeam:{
    marginLeft:50,
  },
});
export default Home;