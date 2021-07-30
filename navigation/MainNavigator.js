import React, { Component } from 'react';
import {Text, View} from 'react-native';
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
import { retrieveAsyncStorageData } from '../handler/storage';


const MainNavigator = (navigation, route) => {
    const [data, setData] = useState();

    const StackMain = createStackNavigator();
    // console.log("route params", route.params)

    const getUser = async () => {

        let user = await retrieveAsyncStorageData('user')
        if (user !== null) {
            setData(user)
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const StackLoggedIn = (
        <NavigationContainer>
            <StackMain.Navigator >
                <StackMain.Screen name='TabStack' component={TabStack} options={{ headerShown: false }} />
            </StackMain.Navigator>
        </NavigationContainer>

    );

    const StackAuthentication = (
        <NavigationContainer>
            <StackMain.Navigator >
                <StackMain.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <StackMain.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <StackMain.Screen name='TabStack' component={TabStack} options={{ headerShown: false }} />
                <StackMain.Screen name='Home' component={Home} />
                <StackMain.Screen name='Games' component={Games} />
            </StackMain.Navigator>
        </NavigationContainer>

    );


    return (
        <>
            {data !== undefined ? StackLoggedIn : StackAuthentication}

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