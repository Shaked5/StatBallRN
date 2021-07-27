import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../Pages/AppHome/Home';
import { Games } from '../Pages/Games';



const Tab = createBottomTabNavigator();

const TabStack =({route})=> {
    return (
        <Tab.Navigator
           
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                style: {
                    backgroundColor: '#633689',
                },
                labelStyle: {
                    textAlign: 'center',
                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color="black" size={24} />
                    ),
                }}>
                </Tab.Screen>
            <Tab.Screen
                name="Games"
                component={Games}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={24} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                //component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={24} />
                    ),
                }}>
                {props => <Profile {...props} user={route.params.user} />}
            </Tab.Screen> */}


        </Tab.Navigator>
    );
}
export default TabStack;