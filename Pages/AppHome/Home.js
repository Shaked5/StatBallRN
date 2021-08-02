import { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Toast from "react-native-toast-message";
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { StatBallContext } from '../../context';

import HomeImage from "../../components/HomeImage";
import PlayerTeam from "../PlayerTeam";
import userHandler from "../../handler/userHandler";
import { retrieveAsyncStorageData } from "../../handler/storage";



export const Home = (route) => {
  const [value, setValue] = useState('');
  // const { getItem, setItem } = useAsyncStorage('user')
  const { user , playerList, setPlayerList } = React.useContext(StatBallContext);
  const [isFirstTime, setIsFirstTime] = useState(true);


  const getPlayers = async () => {

  }

  useEffect(() => {

  }, [playerList])


  const handleAddPlayer = async (player) => {
    let res = await userHandler.AddPlayerById(
      player.userId,
      player.firstName,
      player.lastName,
      player.shirtNumber,
      player.position,
      player.age,
      player.height
    );
    Toast.show({
      position: "top",
      visibilityTime: 4000,
      type: "success",
      text1: "Message",
      text2: "Add a new player completed 👋",
    });
    setIsFirstTime(false)
    let players = await userHandler.GetPlayersById(player.userId)
    setPlayerList(players)
  }


  const handleUpdatePlayerById = async (player) => {
    let res = await userHandler.UpdatePlayerById(
      player.playerId,
      player.fName,
      player.lName,
      player.shirtNumber,
      player.position,
      player.age,
      player.height
    );
    // Toast.show({
    //   position: "top",
    //   visibilityTime: 4000,
    //   type: "success",
    //   text1: "Message",
    //   text2: "Add a new player completed 👋",
    // });
    console.log('player after update=',res)
    console.log('user.userId= ',user.userId);
    // let findId = await retrieveAsyncStorageData('user')
    let players = await userHandler.GetPlayersById(user.userId)
    setPlayerList(players)
  }




  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const GamesStack = createStackNavigator();
  return (
    <View style={styles.centeredView} >
      <PlayerTeam />
      <HomeImage handleAddPlayer={(player) => handleAddPlayer(player)} handleUpdatePlayerById={(player) => handleUpdatePlayerById(player)} />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",

  },
  PlayerTeam: {
    marginLeft: 50,
  },
});
export default Home;