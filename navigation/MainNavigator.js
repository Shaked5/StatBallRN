import React, { Component } from 'react';
import { TouchableOpacity, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import Home from '../Pages/AppHome/Home';
import LoggedInNavigator from './LoggedInNavigator';
import PlayerTeam from '../Pages/PlayerTeam';
import { not } from 'react-native-reanimated';


const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = (navigation, route) => {
    
    const user = true;
    const defaultScreens =   (
            <>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
            </>
        ) ;

   

    const LoggedInNavigator = (
            // <Tab.Navigator
            // initialRouteName={Home}
            // tabBarOptions ={{
            //   style: {
            //     borderTopColor: "rgba(0, 0, 0, 0.1)",
            //     borderTopWidth: 2,
            //   },
            //   activeTintColor:"green",
            //   labelStyle: {fontSize: 13, fontWeight:"700"},
            // }}
            // >
            <>
              <Stack.Screen
               name="Home" 
               component ={()=> <Home/>}
               options= {{
                title: "Home"
              }} 
               />
              {/* <Tab.Screen
               name="Games"
               component={SettingsScreen}
               options= {{
                title: "Games"
              }}
               /> */}
              {/* <Tab.Screen
               name="My Team"
               component={MyTeam}
               options= {{
                 title: "MyTeam"
               }}
               /> 
                </Stack.Navigator>
               */}
            </>
          );

 

    return (
        <Stack.Navigator
        
        >

            {user?LoggedInNavigator:defaultScreens}

        </Stack.Navigator>
    )
}
export default MainNavigator;
