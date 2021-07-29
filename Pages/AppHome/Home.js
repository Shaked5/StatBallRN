import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {StatBallContext} from '../../context';

import HomeImage from "../../components/HomeImage";
import PlayerTeam from "../PlayerTeam";



export const Home = (route) => {
  console.log("route params", navigator)
  console.log("route params", route)
  const [value, setValue] = useState('');
  // const { getItem, setItem } = useAsyncStorage('user')
  const {user} = React.useContext(StatBallContext);

  // const getData = async () => {
    // let user1 = await retrieveAsyncStorageData("user");

    // const item =  await AsyncStorage.getItem('user')
    // console.log('item=',item);
    // if (item != null){
    //   return item;
    // }
    // return null
  // }

  useEffect(() => {
    try {


      // let data = getData();
      // console.log(data)
      // console.log("here",JSON.stringify(getItem()))
      // console.log(useAsyncStorage('user'))
    } catch (error) {
      console.log(error)
    }
    console.log('in useEffect');
    console.log('user=', user);
  }, [])

  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const GamesStack = createStackNavigator();

  return (
    <View style={styles.centeredView} >
      <PlayerTeam/>
      <HomeImage/>
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