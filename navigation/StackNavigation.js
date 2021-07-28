
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Pages/AppAuth/Login';
import Register from '../Pages/AppAuth/Register';
import TabStack from './TabStack';
import Home from '../Pages/AppHome/Home';
import { Games } from '../Pages/AppHome/Games';


const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='TabStack' component={TabStack} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Games' component={Games} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default StackNavigation;