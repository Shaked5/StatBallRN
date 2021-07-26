import { useState, useEffect } from "react";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


import PlayerTeam from "../PlayerTeam";
import LoggedInNavigator from "../../navigation/LoggedInNavigator";


export const Home = ({route}) => {
  return (
    <View style={{flex:1}} >
        <Text>Home</Text>
        <PlayerTeam/>
        <TabNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "60%",
    backgroundColor: "black",
  },
  icon:{
      position:"absolute",
      marginTop:"10%",
      
  }
});
export default Home;

/** <View style={styles.centeredView}>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="md-checkmark-circle" size={50} color="green"/>
            </TouchableOpacity>
        </View> **/