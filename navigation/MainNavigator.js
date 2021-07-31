import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import StackNavigation from './StackNavigation';
import { StatBallContext } from '../context';
import { useState, useEffect, useContext } from 'react/cjs/react.development';
import TabStack from './TabStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import Home from '../Pages/AppHome/Home';
import { Games } from '../Pages/AppHome/Games';
import { retrieveAsyncStorageData } from '../handler/storage';


const MainNavigator = (navigation, route) => {
    const { user, setUser } = useContext(StatBallContext);

    const StackMain = createStackNavigator();

    const getUser = async () => {

        let user = await retrieveAsyncStorageData('user')
        if (user !== null) {
            setUser(user)
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const StackLoggedIn = (
        <NavigationContainer>
            <StackMain.Navigator initialRouteName="TabStack">
                <StackMain.Screen name='TabStack' component={TabStack} options={{ headerShown: false }} />
            </StackMain.Navigator>
        </NavigationContainer>

    );

    const StackAuthentication = (
        <NavigationContainer>
            <StackMain.Navigator initialRouteName="Login">
                <StackMain.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <StackMain.Screen name='Register' component={Register} options={{ headerShown: false }} />
            </StackMain.Navigator>
        </NavigationContainer>

    );


    return (
        <>
            {user ? StackLoggedIn : StackAuthentication}

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