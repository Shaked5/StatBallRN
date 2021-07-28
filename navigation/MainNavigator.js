import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import StackNavigation from './StackNavigation';
import { StatBallContext } from '../context';
import { useState, useEffect } from 'react/cjs/react.development';
import TabStack from './TabStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import Home from '../Pages/AppHome/Home';
import { Games } from '../Pages/AppHome/Games';



// import { TouchableOpacity, View, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from '../Pages/AppAuth/Login';
// import Register from '../Pages/AppAuth/Register';
// import Home from '../Pages/AppHome/Home';

// import PlayerTeam from '../Pages/PlayerTeam';
// import { not } from 'react-native-reanimated';
// import HomeImage from '../components/HomeImage';
// import { Games } from '../Pages/Games';


// const Stack = createStackNavigator();
// const HomeStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const MainNavigator = (navigation, route) => {
    const StackMain = createStackNavigator();

     const StackLoggedIn =(
            <NavigationContainer>
                <StackMain.Navigator >
                    <StackMain.Screen name='TabStack' component={TabStack} />
                </StackMain.Navigator>
            </NavigationContainer>
    
        );

        const StackAuthentication =(
            <NavigationContainer>
                <StackMain.Navigator >
                <StackMain.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <StackMain.Screen name='Register' component={Register} options={{headerShown:false}} />
                <StackMain.Screen name='TabStack' component={TabStack} options={{headerShown:false}}/>
                <StackMain.Screen name='Home' component={Home} />
                <StackMain.Screen name='Games' component={Games} />
                </StackMain.Navigator>
            </NavigationContainer>
    
        );

    const [data, setData] = useState(null);

    const readUserFromStorage = async () => {
        const item = await AsyncStorage.getItem('user');
        setData(item);
      };

      useEffect(() => {
        readUserFromStorage();
      }, [])

    return (
        <>
            {data !== null ? StackLoggedIn : StackAuthentication}
            
        </>
    )
}
export default MainNavigator;







//     // initialRouteName={Home}
//         // tabBarOptions={{
//         //     style: {
//         //         borderTopColor: "rgba(0, 0, 0, 0.1)",
//         //         borderTopWidth: 2,
//         //     },
//         //     activeTintColor: "green",
//         //     labelStyle: { fontSize: 13, fontWeight: "700" },
//         // }}>