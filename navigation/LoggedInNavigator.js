import React, { Component } from 'react';
import { TouchableOpacity, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PlayerTeam from '../Pages/PlayerTeam';
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import Home from '../Pages/AppHome/Home';

const Tab = createBottomTabNavigator();

export const LoggedInNavigator = () => {
      return (
        <Tab.Navigator
        initialRouteName={Home}
        tabBarOptions ={{
          style: {
            borderTopColor: "rgba(0, 0, 0, 0.1)",
            borderTopWidth: 2,
          },
          activeTintColor:"green",
          labelStyle: {fontSize: 13, fontWeight:"700"},
        }}
        >
          <Tab.Screen
           name="Home" 
           component ={Home}
           options= {{
            title: "Home"
          }} 
           />
          {/* <Tab.Screen name="Players" component={PlayerTeam}/> */}
          <Tab.Screen
           name="Settings"
           component={SettingsScreen}
           options= {{
            title: "Games"
          }}
           />
          <Tab.Screen
           name="My Team"
           component={MyTeam}
           options= {{
             title: "MyTeam"
           }}
           />
        </Tab.Navigator>
      );
    };
    export default LoggedInNavigator;
    
    
    
    
