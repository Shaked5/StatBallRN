import React, { Component } from 'react';
import { TouchableOpacity, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlayerTeam from '../Pages/PlayerTeam';
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import Home from '../Pages/AppHome/Home';
import { Games } from '../Pages/Games';


export const TabNavigator=()=>{

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen name= "Home" component={PlayerTeam}/>
      <Tab.Screen name="Games" component={Games}/>
    </Tab.Navigator>
  )
}
export default TabNavigator;

 {/* <Tab.Navigator initialRouteName={HomeStackScreen}>
          <Tab.Screen name="Home" component={HomeStackScreen}/>
          <Tab.Screen name="Games" component={GamesStackScreen}/>
        </Tab.Navigator> */}
    
    
    
